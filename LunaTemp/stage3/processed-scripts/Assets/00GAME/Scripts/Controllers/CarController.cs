using UnityEngine;
using DG.Tweening;

public class CarController : MonoBehaviour
{
    [Header("Car Properties")]
    [SerializeField] public Enums.CarType carType;
    [SerializeField] public int carCapacity;
    [SerializeField] public Enums.GameColor carColor;
    [SerializeField] public bool isFirstLine;
    [SerializeField] public bool isParked;

    [Header("Movement")]
    [SerializeField] private float moveSpeed = 8f;
    [SerializeField] private float rotateSpeed = 12f;
    [SerializeField] private float pathLookAhead = 0.08f;
    [SerializeField] private float parkRotationY = -150f;
    [SerializeField] private float parkApproachDistance = 2f;

    [Header("References")]
    [SerializeField] private MeshRenderer carBodyMeshRenderer;
    [SerializeField] private MeshRenderer carHoodMeshRenderer;

    public bool isMoving;

    private Tween moveTween;
    private ParkingSlotController assignedSlot;
    private Transform[] parkingPath;
    private int goInLineStep;
    private int fromParkingStep;
    private Vector3 currentMoveTarget;

    public void Init()
    {
        ColorPalette colorPalette = GameManager.Instance.colorPalette;
        Material carMat = colorPalette.GetCarMaterial(carColor);
        Material outlineMat = colorPalette.GetCarOutlineMaterial(carColor);

        Material[] bodyMaterials = new Material[2];
        bodyMaterials[0] = carMat;
        bodyMaterials[1] = outlineMat;
        carBodyMeshRenderer.sharedMaterials = bodyMaterials;

        carHoodMeshRenderer.sharedMaterial = carMat;
    }

    public void GoInLine(ParkingSlotController slot, Transform[] path)
    {
        if (isMoving)
        {
            return;
        }

        if (slot == null || path == null || path.Length < 3)
        {
            return;
        }

        assignedSlot = slot;
        parkingPath = path;
        goInLineStep = 0;
        isMoving = true;
        RunGoInLineStep();
    }

    public void GoForGuest()
    {
        if (isMoving)
        {
            return;
        }

        isMoving = true;
        PlayGuestPath(OnGuestPathFinishedAlone);
    }

    public void GoFromParking(Transform[] path)
    {
        if (isMoving)
        {
            return;
        }

        if (!isParked || assignedSlot == null)
        {
            return;
        }

        if (path == null || path.Length < 3)
        {
            return;
        }

        parkingPath = path;
        isParked = false;
        fromParkingStep = 0;
        isMoving = true;
        RunFromParkingStep();
    }

    public void MoveInQueue([Bridge.Ref] Vector3 target)
    {
        isMoving = true;
        KillMoveTween();

        moveTween = transform
            .DOMove(target, moveSpeed)
            .SetSpeedBased()
            .SetEase(Ease.Linear)
            .OnComplete(OnQueueMoveComplete);
    }

    private void OnQueueMoveComplete()
    {
        isMoving = false;
    }

    private void RunGoInLineStep()
    {
        // 0: thang Z toi Z cua path[0] (skip neu Z da cao hon)
        if (goInLineStep == 0)
        {
            float targetZ = parkingPath[0].position.z;
            if (transform.position.z >= targetZ)
            {
                AdvanceGoInLineStep();
                return;
            }

            Vector3 alignPos = transform.position;
            alignPos.z = targetZ;
            MoveToPoint(alignPos, AdvanceGoInLineStep);
            return;
        }

        // 1: path[0] -> path[1] -> diem X = GuestPath[0].x (khong can toi path[2])
        if (goInLineStep == 1)
        {
            Vector3 guestEntry = GetGuestEntryPoint();
            Vector3[] route = new Vector3[4];
            route[0] = transform.position;
            route[1] = parkingPath[0].position;
            route[2] = parkingPath[1].position;
            route[3] = guestEntry;
            MoveAlongPoints(route, AdvanceGoInLineStep);
            return;
        }

        // 2: GoForGuest 1 luot
        if (goInLineStep == 2)
        {
            PlayGuestPath(AdvanceGoInLineStep);
            return;
        }

        // 3: thang theo Z xuong toi Z cua path[1]
        if (goInLineStep == 3)
        {
            Vector3 downPos = transform.position;
            downPos.z = parkingPath[1].position.z;

            if (Mathf.Abs(transform.position.z - downPos.z) <= 0.01f)
            {
                AdvanceGoInLineStep();
                return;
            }

            MoveToPoint(downPos, AdvanceGoInLineStep);
            return;
        }

        // 4: toi diem tiep can tren truc goc park (giao voi lane path[1]->path[2])
        if (goInLineStep == 4)
        {
            Vector3 approachPoint = GetParkApproachPoint();
            MoveToPoint(approachPoint, AdvanceGoInLineStep);
            return;
        }

        // 5: di thang theo huong parkRotationY vao slot
        if (goInLineStep == 5)
        {
            MoveIntoParkingSlot(OnParkedComplete);
            return;
        }
    }

    private void AdvanceGoInLineStep()
    {
        goInLineStep = goInLineStep + 1;
        RunGoInLineStep();
    }

    private void RunFromParkingStep()
    {
        // 0: lui ra path (toi approach point), giu goc park
        if (fromParkingStep == 0)
        {
            MoveToPointReverse(GetParkApproachPoint(), AdvanceFromParkingStep);
            return;
        }

        // 1: toi diem X = GuestPath[0] de vao GoForGuest
        if (fromParkingStep == 1)
        {
            MoveToPoint(GetGuestEntryPoint(), AdvanceFromParkingStep);
            return;
        }

        // 2: GoForGuest 1 luot
        if (fromParkingStep == 2)
        {
            PlayGuestPath(AdvanceFromParkingStep);
            return;
        }

        // 3: thang Z xuong toi Z path[1]
        if (fromParkingStep == 3)
        {
            Vector3 downPos = transform.position;
            downPos.z = parkingPath[1].position.z;

            if (Mathf.Abs(transform.position.z - downPos.z) <= 0.01f)
            {
                AdvanceFromParkingStep();
                return;
            }

            MoveToPoint(downPos, AdvanceFromParkingStep);
            return;
        }

        // 4: toi approach point
        if (fromParkingStep == 4)
        {
            MoveToPoint(GetParkApproachPoint(), AdvanceFromParkingStep);
            return;
        }

        // 5: vao lai slot
        if (fromParkingStep == 5)
        {
            MoveIntoParkingSlot(OnParkedComplete);
            return;
        }
    }

    private void AdvanceFromParkingStep()
    {
        fromParkingStep = fromParkingStep + 1;
        RunFromParkingStep();
    }

    private void OnParkedComplete()
    {
        transform.rotation = Quaternion.Euler(0f, parkRotationY, 0f);
        isParked = true;
        isMoving = false;
        isFirstLine = false;
    }

    private void MoveIntoParkingSlot(TweenCallback onComplete)
    {
        // Huong di chuyen trung voi goc park -> xe tu xoay theo duong di, end snap dung goc
        MoveToPoint(assignedSlot.transform.position, onComplete);
    }

    private void MoveToPointReverse([Bridge.Ref] Vector3 target, TweenCallback onComplete)
    {
        KillMoveTween();
        transform.rotation = Quaternion.Euler(0f, parkRotationY, 0f);

        moveTween = transform
            .DOMove(target, moveSpeed)
            .SetSpeedBased()
            .SetEase(Ease.Linear)
            .OnComplete(onComplete);
    }

    private void OnGuestPathFinishedAlone()
    {
        isMoving = false;
    }

    private void PlayGuestPath(TweenCallback onComplete)
    {
        GuestPath path = GameManager.Instance.guestPath;
        if (path == null || !path.HasWaypoints())
        {
            if (onComplete != null)
            {
                onComplete();
            }
            return;
        }

        Vector3[] waypoints = path.GetPositions();
        Vector3[] route = BuildRouteFromCurrent(waypoints);
        MoveAlongPoints(route, onComplete);
    }

    private void MoveAlongPoints(Vector3[] route, TweenCallback onComplete)
    {
        if (route == null || route.Length < 2)
        {
            if (onComplete != null)
            {
                onComplete();
            }
            return;
        }

        KillMoveTween();
        moveTween = transform
            .DOPath(route, moveSpeed, PathType.CatmullRom, PathMode.Full3D, 20)
            .SetSpeedBased()
            .SetEase(Ease.Linear)
            .SetLookAt(pathLookAhead)
            .OnComplete(onComplete);
    }

    private void MoveToPoint([Bridge.Ref] Vector3 target, TweenCallback onComplete)
    {
        currentMoveTarget = target;
        KillMoveTween();

        moveTween = transform
            .DOMove(target, moveSpeed)
            .SetSpeedBased()
            .SetEase(Ease.Linear)
            .OnUpdate(SmoothLookAtCurrentTarget)
            .OnComplete(onComplete);
    }

    private void SmoothLookAtCurrentTarget()
    {
        Vector3 dir = currentMoveTarget - transform.position;
        dir.y = 0f;
        if (dir.sqrMagnitude < 0.0001f)
        {
            return;
        }

        Quaternion targetRotation = Quaternion.LookRotation(dir.normalized, Vector3.up);
        transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, Time.deltaTime * rotateSpeed);
    }

    private Vector3 GetGuestEntryPoint()
    {
        GuestPath guestPath = GameManager.Instance.guestPath;
        float guestX = 0f;
        if (guestPath != null && guestPath.HasWaypoints())
        {
            guestX = guestPath.GetFirstPosition().x;
        }

        return GetPointOnSegmentByX(parkingPath[1].position, parkingPath[2].position, guestX);
    }

    private Vector3 GetParkForward()
    {
        Vector3 forward = Quaternion.Euler(0f, parkRotationY, 0f) * Vector3.forward;
        forward.y = 0f;
        if (forward.sqrMagnitude < 0.0001f)
        {
            return Vector3.forward;
        }

        return forward.normalized;
    }

    private Vector3 GetParkApproachPoint()
    {
        Vector3 slotPos = assignedSlot.transform.position;
        Vector3 parkDir = GetParkForward();
        Vector3 laneA = parkingPath[1].position;
        Vector3 laneB = parkingPath[2].position;

        Vector3 laneHit;
        bool hasHit = TryIntersectLinesXZ(laneA, laneB, slotPos, parkDir, out laneHit);
        if (hasHit)
        {
            Vector3 toHit = laneHit - slotPos;
            toHit.y = 0f;
            float along = Vector3.Dot(toHit, parkDir);

            // Can diem phia SAU slot (doi dien huong park) de di vao theo dung goc xoay
            if (along < -0.01f)
            {
                laneHit.y = slotPos.y;
                return laneHit;
            }

            float dist = Mathf.Abs(along);
            if (dist < 0.5f)
            {
                dist = parkApproachDistance;
            }

            Vector3 behind = slotPos - parkDir * dist;
            behind.y = slotPos.y;
            return behind;
        }

        Vector3 fallback = slotPos - parkDir * parkApproachDistance;
        fallback.y = slotPos.y;
        return fallback;
    }

    private bool TryIntersectLinesXZ([Bridge.Ref] Vector3 laneA, [Bridge.Ref] Vector3 laneB, [Bridge.Ref] Vector3 axisOrigin, [Bridge.Ref] Vector3 axisDir, out Vector3 hit)
    {
        float ax = laneA.x;
        float az = laneA.z;
        float bx = laneB.x - laneA.x;
        float bz = laneB.z - laneA.z;
        float ox = axisOrigin.x;
        float oz = axisOrigin.z;
        float dx = axisDir.x;
        float dz = axisDir.z;

        float denom = bx * dz - bz * dx;
        if (Mathf.Abs(denom) < 0.0001f)
        {
            hit = Vector3.zero;
            return false;
        }

        float t = ((ox - ax) * dz - (oz - az) * dx) / denom;
        if (t < 0f)
        {
            t = 0f;
        }

        if (t > 1f)
        {
            t = 1f;
        }

        hit = new Vector3(ax + bx * t, axisOrigin.y, az + bz * t);
        return true;
    }

    private Vector3 GetPointOnSegmentByX([Bridge.Ref] Vector3 from, [Bridge.Ref] Vector3 to, float x)
    {
        float dx = to.x - from.x;
        float t = 0f;
        if (Mathf.Abs(dx) > 0.0001f)
        {
            t = (x - from.x) / dx;
            if (t < 0f)
            {
                t = 0f;
            }

            if (t > 1f)
            {
                t = 1f;
            }
        }

        return Vector3.Lerp(from, to, t);
    }

    private Vector3[] BuildRouteFromCurrent(Vector3[] waypoints)
    {
        Vector3[] route = new Vector3[waypoints.Length + 1];
        route[0] = transform.position;
        for (int i = 0; i < waypoints.Length; i++)
        {
            route[i + 1] = waypoints[i];
        }

        return route;
    }

    private void KillMoveTween()
    {
        if (moveTween != null)
        {
            moveTween.Kill();
            moveTween = null;
        }
    }

    private void OnDisable()
    {
        KillMoveTween();
        isMoving = false;
    }
}
