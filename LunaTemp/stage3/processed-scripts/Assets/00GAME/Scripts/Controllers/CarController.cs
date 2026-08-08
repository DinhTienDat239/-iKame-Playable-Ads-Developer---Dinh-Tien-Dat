using UnityEngine;
using DG.Tweening;
using DAT.Managers;

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
    [SerializeField] private float guestPickupSpeed = 2f;
    [SerializeField] private float speedTransitionDuration = 0.4f;
    [SerializeField] private float rotateSpeed = 12f;
    [SerializeField] private float pathLookAhead = 0.08f;
    [SerializeField] private float parkRotationY = -150f;
    [SerializeField] private float parkApproachDistance = 2f;
    [SerializeField] private float reverseSpeedMultiplier = 0.5f;
    [SerializeField] private float exitOffsetX = -10f;
    [SerializeField] private float fullExitSpeedMultiplier = 1.5f;
    [SerializeField] [Range(0f, 1f)] private float fullExitBoostSegmentT = 0.15f;
    [SerializeField] private float boostBodyTiltX = -7f;
    [SerializeField] private float boostBodyTiltDuration = 0.15f;
    [SerializeField] private float parkBrakeTiltX = 10f;
    [SerializeField] private float parkBrakeTiltInDuration = 0.12f;
    [SerializeField] private float parkBrakeTiltOutDuration = 0.28f;
    [SerializeField] private float laneBlockedSwayZ = 3f;
    [SerializeField] private float laneBlockedSwayStepDuration = 0.06f;
    [SerializeField] private float turnSwayMaxZ = 7f;
    [SerializeField] private float turnSwayFactor = 0.045f;
    [SerializeField] private float turnSwayReturnSpeed = 10f;

    [Header("Collision Avoidance")]
    [SerializeField] private float collisionCheckDistance = 3f;
    [SerializeField] private float aheadCollisionResumeDelay = 0.25f;
    [SerializeField] private float reverseCollisionStopDuration = 0.05f;

    [Header("Hood")]
    [SerializeField] private float hoodCloseDuration = 0.25f;
    [SerializeField] private Vector3 hoodClosedStartScale = new Vector3(0.05f, 0.05f, 0.05f);
    [SerializeField] private float hoodCloseDropOffset = 0.4f;

    [Header("Seats")]
    [SerializeField] private Transform[] seatTransforms;

    [Header("References")]
    [SerializeField] private MeshRenderer carBodyMeshRenderer;
    [SerializeField] private MeshRenderer carHoodMeshRenderer;
    [SerializeField] private GameObject carBody;
    [SerializeField] private GameObject carSmokeFX;

    public bool isMoving;
    public int currentPassengerCount;

    private Tween moveTween;
    private Tween speedTween;
    private float speedTweenStart;
    private float speedTweenTarget;
    private ParkingSlotController assignedSlot;
    private Transform[] parkingPath;
    private int goInLineStep;
    private int fromParkingStep;
    private Vector3 currentMoveTarget;
    private float activeMoveSpeed;
    private bool isPickingUp;
    private bool isOnGuestPathRoute;
    private GuestSpawnPos pendingPickupSpawnPos;
    public bool _isBlockedByAhead;
    private float _blockedTargetSpeed;
    private bool _isWaitingCollisionResume;
    private Tween _collisionResumeDelayTween;
    private bool _skipAheadCollision;
    private bool _isOccupyingParkingLaneSegment;
    private bool _isDepartingCarLineBeforePathPoint1;
    public bool _isReversing;
    private TweenCallback _pendingReverseCallback;
    public bool isOutOfCarLine = false;

    private Vector3 hoodRestLocalPos;
    private Vector3 hoodRestLocalScale;
    private bool hoodRestCached;
    private Tween hoodTween;
    private bool isHoodClosed;
    private bool fullExitSpeedBoostApplied;
    private Tween carBodyTiltTween;
    private Vector3 carBodyRestLocalEuler;
    private bool carBodyRestCached;
    private float bodyPitchX;
    private float bodySwayZ;
    private float bodyBlockedSwayZ;
    private float previousTurnYaw;
    private bool turnYawInitialized;

    private void Awake()
    {
        GetCarBodyTransform();
    }

    private void Update()
    {
        UpdateCarBodyTurnSway();
        TryClearDepartingCarLineFlagByX();

        if (isMoving && isOutOfCarLine && !_skipAheadCollision)
        {
            CheckAheadCollision();
        }
    }

    private void TryClearDepartingCarLineFlagByX()
    {
        if (!_isDepartingCarLineBeforePathPoint1)
        {
            return;
        }

        SpawnManager spawnManager = null;
        if (GameManager.Instance != null)
        {
            spawnManager = GameManager.Instance.spawnManager;
        }

        if (spawnManager == null)
        {
            return;
        }

        float rightmostColumnX = spawnManager.GetRightmostCarLineColumnX();
        if (transform.position.x >= rightmostColumnX)
        {
            _isDepartingCarLineBeforePathPoint1 = false;
        }
    }

    private void ClearAheadCollisionState()
    {
        CancelCollisionResumeDelay();

        if (!_isBlockedByAhead)
        {
            return;
        }

        _isBlockedByAhead = false;
        _blockedTargetSpeed = 0f;

        if (isMoving)
        {
            SetActiveMoveSpeed(moveSpeed);
        }
    }

    private const float CollisionRaySideOffset = 0.5f;

    private void CheckAheadCollision()
    {
        Vector3 dir = transform.forward;
        dir.y = 0f;
        if (_isReversing)
        {
            dir = -dir;
        }
        if (dir.sqrMagnitude < 0.0001f)
        {
            return;
        }

        dir.Normalize();

        float backwardOffset = 0.3f;
        Vector3 centerOrigin = transform.position - dir * backwardOffset;
        float totalRayDistance = collisionCheckDistance + backwardOffset;

        bool isBlocked = false;
        float blockedSpeed = 0f;

        if (TryDetectAheadCar(centerOrigin + transform.right * -CollisionRaySideOffset, dir, totalRayDistance, out blockedSpeed))
        {
            isBlocked = true;
        }
        else if (TryDetectAheadCar(centerOrigin + transform.right * CollisionRaySideOffset, dir, totalRayDistance, out blockedSpeed))
        {
            isBlocked = true;
        }

        if (isBlocked)
        {
            CancelCollisionResumeDelay();

            if (!_isBlockedByAhead || !Mathf.Approximately(_blockedTargetSpeed, blockedSpeed))
            {
                _isBlockedByAhead = true;
                _blockedTargetSpeed = blockedSpeed;

                if (_isReversing)
                {
                    ApplyMoveSpeedTween(blockedSpeed, Ease.InOutSine, reverseCollisionStopDuration);
                }
                else
                {
                    SetActiveMoveSpeed(blockedSpeed);
                }
            }
            return;
        }

        if (_isBlockedByAhead)
        {
            _isBlockedByAhead = false;
            _blockedTargetSpeed = 0f;
            StartCollisionResumeDelay();
        }
    }

    private void StartCollisionResumeDelay()
    {
        if (_isWaitingCollisionResume)
        {
            return;
        }

        SetActiveMoveSpeed(0f);
        _isWaitingCollisionResume = true;
        KillCollisionResumeDelayTween();

        _collisionResumeDelayTween = DOVirtual.DelayedCall(aheadCollisionResumeDelay, OnCollisionResumeDelayComplete);
    }

    private void OnCollisionResumeDelayComplete()
    {
        _collisionResumeDelayTween = null;
        _isWaitingCollisionResume = false;
        ApplyMoveSpeedTween(moveSpeed, Ease.InOutSine, speedTransitionDuration * 2f);
    }

    private void CancelCollisionResumeDelay()
    {
        _isWaitingCollisionResume = false;
        KillCollisionResumeDelayTween();
    }

    private void KillCollisionResumeDelayTween()
    {
        if (_collisionResumeDelayTween != null)
        {
            _collisionResumeDelayTween.Kill();
            _collisionResumeDelayTween = null;
        }
    }

    private bool TryDetectAheadCar([Bridge.Ref] Vector3 rayOrigin, [Bridge.Ref] Vector3 dir, float totalRayDistance, out float blockedSpeed)
    {
        blockedSpeed = 0f;

        RaycastHit hitInfo;
        bool isHit = Physics.Raycast(
            rayOrigin,
            dir,
            out hitInfo,
            totalRayDistance,
            Physics.DefaultRaycastLayers,
            QueryTriggerInteraction.Collide);

#if UNITY_EDITOR
        if (isHit)
        {
            Debug.DrawRay(rayOrigin, dir * hitInfo.distance, Color.red);
        }
        else
        {
            Debug.DrawRay(rayOrigin, dir * totalRayDistance, Color.green);
        }
#endif

        if (!isHit)
        {
            return false;
        }

        CarController ahead = hitInfo.collider.GetComponentInParent<CarController>();
        if (ahead == null || ahead == this || ahead.isParked || ahead._isReversing)
        {
            return false;
        }

        if (ahead.isPickingUp)
        {
            blockedSpeed = guestPickupSpeed;
        }

        return true;
    }

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
        if (carHoodMeshRenderer != null)
        {
            hoodRestLocalPos = carHoodMeshRenderer.transform.localPosition;
            hoodRestLocalScale = carHoodMeshRenderer.transform.localScale;
            hoodRestCached = true;
            carHoodMeshRenderer.gameObject.SetActive(true);
        }
        isHoodClosed = true;
        currentPassengerCount = 0;
        activeMoveSpeed = moveSpeed;
        isOutOfCarLine = false;
        _isOccupyingParkingLaneSegment = false;
        _isDepartingCarLineBeforePathPoint1 = false;
    }

    public bool IsOccupyingParkingLaneSegment()
    {
        return _isOccupyingParkingLaneSegment;
    }

    public bool IsDepartingCarLineBeforeParkingPathPoint1()
    {
        return _isDepartingCarLineBeforePathPoint1;
    }

    public void SetCarBodyVisible(bool visible)
    {
        if (carBody != null)
        {
            carBody.SetActive(visible);
            return;
        }

        if (carBodyMeshRenderer != null)
        {
            carBodyMeshRenderer.gameObject.SetActive(visible);
        }
    }

    private void SetHoodActive(bool active)
    {
        if (carHoodMeshRenderer == null)
        {
            return;
        }

        if (hoodTween != null)
        {
            hoodTween.Kill();
            hoodTween = null;
        }

        if (!active)
        {
            isHoodClosed = false;
            carHoodMeshRenderer.gameObject.SetActive(false);
            return;
        }

        if (isHoodClosed)
        {
            return;
        }

        if (!hoodRestCached)
        {
            hoodRestLocalPos = carHoodMeshRenderer.transform.localPosition;
            hoodRestLocalScale = carHoodMeshRenderer.transform.localScale;
            hoodRestCached = true;
        }

        Transform hood = carHoodMeshRenderer.transform;
        hood.gameObject.SetActive(true);
        VFXManager.Instance.SpawnCarDoneVFX(transform.position);
        AudioManager.Instance.PlaySFX(GameManager.Instance.carDoneSound);
        Vector3 startPos = hoodRestLocalPos;
        startPos.y = hoodRestLocalPos.y + hoodCloseDropOffset;
        hood.localPosition = startPos;
        hood.localScale = hoodClosedStartScale;

        Sequence sequence = DOTween.Sequence();
        sequence.Join(hood.DOLocalMove(hoodRestLocalPos, hoodCloseDuration).SetEase(Ease.OutQuad));
        sequence.Join(hood.DOScale(hoodRestLocalScale, hoodCloseDuration).SetEase(Ease.OutBack));
        hoodTween = sequence;
        isHoodClosed = true;

        ScaleSeatsToZero();
    }

    private void ScaleSeatsToZero()
    {
        if (seatTransforms == null)
        {
            return;
        }

        float duration = hoodCloseDuration * 1.5f;
        for (int i = 0; i < seatTransforms.Length; i++)
        {
            if (seatTransforms[i] == null)
            {
                continue;
            }

            seatTransforms[i].DOKill();
            seatTransforms[i].DOScale(Vector3.zero, duration).SetEase(Ease.InQuad);
        }
    }

    public void TryPickupFromSpawnPos(GuestSpawnPos spawnPos)
    {
        if (!isOnGuestPathRoute || !isMoving)
        {
            return;
        }

        if (isPickingUp)
        {
            return;
        }

        if (currentPassengerCount >= carCapacity)
        {
            return;
        }

        if (spawnPos == null || !spawnPos.HasMatchingGuest(carColor))
        {
            return;
        }

        isPickingUp = true;
        pendingPickupSpawnPos = spawnPos;
        SetActiveMoveSpeed(guestPickupSpeed);
        PickupNextGuest();
    }

    private void PickupNextGuest()
    {
        if (pendingPickupSpawnPos == null)
        {
            EndPickup();
            return;
        }

        if (currentPassengerCount >= carCapacity)
        {
            EndPickup();
            return;
        }

        GuestController guest = pendingPickupSpawnPos.GetFrontGuest();
        if (guest == null || guest.guestColor != carColor)
        {
            EndPickup();
            return;
        }

        Transform seat = GetSeatTransform(currentPassengerCount);
        if (seat == null)
        {
            EndPickup();
            return;
        }

        pendingPickupSpawnPos.RemoveGuest(guest);
        currentPassengerCount = currentPassengerCount + 1;

        guest.JumpToSeat(seat, OnGuestJumpComplete);
    }

    private void OnGuestJumpComplete()
    {
        float delay = GameManager.Instance.guestPickupInterval;
        DOVirtual.DelayedCall(delay, OnPickupDelayComplete);
    }

    private void OnPickupDelayComplete()
    {
        PickupNextGuest();
    }

    private void EndPickup()
    {
        isPickingUp = false;
        pendingPickupSpawnPos = null;
        SetActiveMoveSpeed(moveSpeed);

        if (IsFullCapacity())
        {
            SetHoodActive(true);
        }
    }

    private Transform GetSeatTransform(int seatIndex)
    {
        if (seatTransforms == null || seatIndex < 0 || seatIndex >= seatTransforms.Length)
        {
            return null;
        }

        return seatTransforms[seatIndex];
    }

    private void SetActiveMoveSpeed(float speed)
    {
        ApplyMoveSpeedTween(speed, Ease.InOutSine, speedTransitionDuration);
    }

    private void BeginAcceleratedMove(float targetSpeed)
    {
        activeMoveSpeed = 0f;
        ApplyTweenSpeed();
        ApplyMoveSpeedTween(targetSpeed, Ease.InQuad, speedTransitionDuration);
    }

    private void ApplyMoveSpeedTween(float speed, Ease ease)
    {
        ApplyMoveSpeedTween(speed, ease, speedTransitionDuration);
    }

    private void ApplyMoveSpeedTween(float speed, Ease ease, float transitionDuration)
    {
        if (Mathf.Approximately(activeMoveSpeed, speed))
        {
            return;
        }

        KillSpeedTween();
        speedTweenStart = activeMoveSpeed;
        speedTweenTarget = speed;

        if (transitionDuration <= 0f)
        {
            activeMoveSpeed = speed;
            ApplyTweenSpeed();
            return;
        }

        speedTween = DOVirtual.Float(0f, 1f, transitionDuration, OnSpeedTweenUpdate)
            .SetEase(ease)
            .OnComplete(OnSpeedTweenComplete);
    }

    private void OnSpeedTweenUpdate(float t)
    {
        activeMoveSpeed = Mathf.Lerp(speedTweenStart, speedTweenTarget, t);
        ApplyTweenSpeed();
    }

    private void OnSpeedTweenComplete()
    {
        activeMoveSpeed = speedTweenTarget;
        ApplyTweenSpeed();
        speedTween = null;
    }

    private void KillSpeedTween()
    {
        if (speedTween != null)
        {
            speedTween.Kill();
            speedTween = null;
        }
    }

    private void ApplyTweenSpeed()
    {
        if (moveTween != null && moveTween.IsActive())
        {
            moveTween.timeScale = activeMoveSpeed / moveSpeed;
        }
    }

    public void GoInLine(ParkingSlotController slot, Transform[] path)
    {
        if (isMoving)
        {
            return;
        }

        if (path == null || path.Length < 3)
        {
            return;
        }

        isOutOfCarLine = false;
        assignedSlot = slot;
        if (slot != null)
        {
            slot.isParked = true;
            _isDepartingCarLineBeforePathPoint1 = false;
        }
        else
        {
            _isDepartingCarLineBeforePathPoint1 = true;
        }

        parkingPath = path;
        goInLineStep = 0;
        _skipAheadCollision = false;
        _isOccupyingParkingLaneSegment = false;
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

        if (assignedSlot == null)
        {
            return;
        }

        if (path == null || path.Length < 3)
        {
            return;
        }

        parkingPath = path;
        fromParkingStep = 0;
        _skipAheadCollision = false;
        _isOccupyingParkingLaneSegment = false;
        isMoving = true;
        RunFromParkingStep();
    }

    public void ReleaseParkingSlot()
    {
        if (assignedSlot != null)
        {
            assignedSlot.isParked = false;
        }

        isParked = false;
    }

    public void MoveInQueue([Bridge.Ref] Vector3 target)
    {
        MoveInQueue(target, false);
    }

    public void MoveInQueue([Bridge.Ref] Vector3 target, bool setFirstLineOnComplete)
    {
        isMoving = true;
        isFirstLine = false;
        queueSetFirstLineOnComplete = setFirstLineOnComplete;
        KillMoveTween();

        moveTween = transform
            .DOMove(target, moveSpeed)
            .SetSpeedBased()
            .SetEase(Ease.Linear)
            .OnComplete(OnQueueMoveComplete);
        BeginAcceleratedMove(moveSpeed);
    }

    private bool queueSetFirstLineOnComplete;

    private void OnQueueMoveComplete()
    {
        isMoving = false;

        if (queueSetFirstLineOnComplete)
        {
            isFirstLine = true;
            queueSetFirstLineOnComplete = false;
        }
    }

    private void RunGoInLineStep()
    {
        // 0: thang Z toi Z cua path[0] (skip neu Z da cao hon) -> tat hood khi den cho re
        if (goInLineStep == 0)
        {
            float targetZ = parkingPath[0].position.z;
            if (transform.position.z >= targetZ)
            {
                OnReachParkingTurnPoint();
                return;
            }

            Vector3 alignPos = transform.position;
            alignPos.z = targetZ;
            MoveToPoint(alignPos, OnReachParkingTurnPoint);
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
            PlayGuestPath(OnGoInLineGuestPathComplete);
            return;
        }

        // 3: thang theo Z xuong toi Z cua path[1]
        if (goInLineStep == 3)
        {
            _skipAheadCollision = true;
            ClearAheadCollisionState();

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
            _isOccupyingParkingLaneSegment = true;

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

    private void OnReachParkingTurnPoint()
    {
        SetHoodActive(false);
        isOutOfCarLine = true;

        if (GameManager.Instance != null && GameManager.Instance.carLineManager != null)
        {
            GameManager.Instance.carLineManager.OnDepartedCarReachedTurnPoint(this);
        }

        AdvanceGoInLineStep();
    }

    private void OnGoInLineGuestPathComplete()
    {
        isOnGuestPathRoute = false;
        EndPickup();

        if (IsFullCapacity())
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.CheckWinOnFullCapacity();
            }

            RunFullCapacityExit();
            return;
        }

        if (!TryAssignParkingSlotAfterGuestPath())
        {
            return;
        }

        AdvanceGoInLineStep();
    }

    private void OnFromParkingGuestPathComplete()
    {
        isOnGuestPathRoute = false;
        EndPickup();

        if (IsFullCapacity())
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.CheckWinOnFullCapacity();
            }

            RunFullCapacityExit();
            return;
        }

        if (!TryAssignParkingSlotAfterGuestPath())
        {
            return;
        }

        AdvanceFromParkingStep();
    }

    private bool TryAssignParkingSlotAfterGuestPath()
    {
        ParkingSlotManager parkingSlotManager = null;
        GameManager gameManager = GameManager.Instance;
        if (gameManager != null)
        {
            parkingSlotManager = gameManager.parkingSlotManager;
        }

        if (parkingSlotManager == null)
        {
            HandleParkingFail();
            return false;
        }

        if (assignedSlot != null && !assignedSlot.isParked)
        {
            assignedSlot.isParked = true;
            return true;
        }

        ParkingSlotController freeSlot = parkingSlotManager.ReserveFreeSlot();
        if (freeSlot == null)
        {
            HandleParkingFail();
            return false;
        }

        assignedSlot = freeSlot;
        return true;
    }

    private void HandleParkingFail()
    {
        KillMoveTween();
        KillSpeedTween();
        isMoving = false;

        if (GameManager.Instance != null)
        {
            GameManager.Instance.SetLose();
            GameManager.Instance.UnregisterMovingCar();
        }
    }

    private bool IsFullCapacity()
    {
        return currentPassengerCount >= carCapacity;
    }

    private void RunFullCapacityExit()
    {
        if (parkingPath == null || parkingPath.Length < 3 || parkingPath[2] == null)
        {
            OnCarExitFull();
            return;
        }

        Vector3 point3 = parkingPath[2].position;
        Vector3 exitPoint = point3;
        exitPoint.x = exitPoint.x + exitOffsetX;

        Vector3[] route = new Vector3[3];
        route[0] = transform.position;
        route[1] = point3;
        route[2] = exitPoint;
        MoveFullCapacityExit(route, OnCarExitFull);
    }

    private void MoveFullCapacityExit(Vector3[] route, TweenCallback onComplete)
    {
        if (route == null || route.Length < 2)
        {
            if (onComplete != null)
            {
                onComplete();
            }
            return;
        }

        fullExitSpeedBoostApplied = false;
        KillMoveTween();
        moveTween = transform
            .DOPath(route, moveSpeed, PathType.CatmullRom, PathMode.Full3D, 20)
            .SetSpeedBased()
            .SetEase(Ease.Linear)
            .SetLookAt(pathLookAhead)
            .OnUpdate(CheckFullExitSpeedBoost)
            .OnComplete(onComplete);
        BeginAcceleratedMove(moveSpeed);
    }

    private void CheckFullExitSpeedBoost()
    {
        if (fullExitSpeedBoostApplied)
        {
            return;
        }

        if (!HasReachedFullExitBoostPoint())
        {
            return;
        }
        carSmokeFX.SetActive(true);
        carSmokeFX.transform.localScale = Vector3.zero;
        carSmokeFX.transform.DOScale(0.1f, 0.25f).SetEase(Ease.OutBack);
        GameManager.Instance.barrierController.OpenBarrier();
        fullExitSpeedBoostApplied = true;
        SetActiveMoveSpeed(moveSpeed * fullExitSpeedMultiplier);
        PlayCarBodyBoostTilt();
    }

    private void PlayCarBodyBoostTilt()
    {
        if (GetCarBodyTransform() == null)
        {
            return;
        }

        KillCarBodyTiltTween();
        carBodyTiltTween = DOVirtual.Float(bodyPitchX, boostBodyTiltX, boostBodyTiltDuration, OnBodyPitchUpdate)
            .SetEase(Ease.OutQuad);
    }

    private void PlayCarBodyParkBrakeTilt()
    {
        if (GetCarBodyTransform() == null)
        {
            return;
        }

        KillCarBodyTiltTween();
        bodyPitchX = 0f;

        Sequence brakeSequence = DOTween.Sequence();
        brakeSequence.Append(
            DOVirtual.Float(0f, parkBrakeTiltX, parkBrakeTiltInDuration, OnBodyPitchUpdate)
                .SetEase(Ease.OutQuad));
        brakeSequence.Append(
            DOVirtual.Float(parkBrakeTiltX, 0f, parkBrakeTiltOutDuration, OnBodyPitchUpdate)
                .SetEase(Ease.OutBack));
        carBodyTiltTween = brakeSequence;
    }

    public void PlayParkingLaneBlockedSway()
    {
        if (GetCarBodyTransform() == null)
        {
            return;
        }

        KillCarBodyTiltTween();
        bodyBlockedSwayZ = 0f;

        Sequence swaySequence = DOTween.Sequence();
        swaySequence.Append(
            DOVirtual.Float(0f, laneBlockedSwayZ, laneBlockedSwayStepDuration, OnBodyBlockedSwayUpdate)
                .SetEase(Ease.OutQuad));
        swaySequence.Append(
            DOVirtual.Float(laneBlockedSwayZ, -laneBlockedSwayZ, laneBlockedSwayStepDuration * 2f, OnBodyBlockedSwayUpdate)
                .SetEase(Ease.InOutSine));
        swaySequence.Append(
            DOVirtual.Float(-laneBlockedSwayZ, 0f, laneBlockedSwayStepDuration, OnBodyBlockedSwayUpdate)
                .SetEase(Ease.OutQuad));
        carBodyTiltTween = swaySequence;
    }

    private void OnBodyBlockedSwayUpdate(float swayZ)
    {
        bodyBlockedSwayZ = swayZ;
        ApplyCarBodyLocalRotation();
    }

    private void OnBodyPitchUpdate(float pitchX)
    {
        bodyPitchX = pitchX;
        ApplyCarBodyLocalRotation();
    }

    private void UpdateCarBodyTurnSway()
    {
        if (GetCarBodyTransform() == null)
        {
            return;
        }

        if (moveTween != null && moveTween.IsActive())
        {
            float yaw = transform.eulerAngles.y;
            if (turnYawInitialized)
            {
                float deltaYaw = Mathf.DeltaAngle(previousTurnYaw, yaw);
                float turnRate = deltaYaw / Time.deltaTime;
                float targetSway = -turnRate * turnSwayFactor;
                if (targetSway > turnSwayMaxZ)
                {
                    targetSway = turnSwayMaxZ;
                }
                else if (targetSway < -turnSwayMaxZ)
                {
                    targetSway = -turnSwayMaxZ;
                }

                bodySwayZ = Mathf.Lerp(bodySwayZ, targetSway, Time.deltaTime * turnSwayReturnSpeed);
            }

            previousTurnYaw = yaw;
            turnYawInitialized = true;
        }
        else
        {
            turnYawInitialized = false;
            bodySwayZ = Mathf.Lerp(bodySwayZ, 0f, Time.deltaTime * turnSwayReturnSpeed);
        }

        ApplyCarBodyLocalRotation();
    }

    private void ApplyCarBodyLocalRotation()
    {
        Transform body = GetCarBodyTransform();
        if (body == null)
        {
            return;
        }

        Vector3 euler = carBodyRestLocalEuler;
        euler.x = euler.x + bodyPitchX;
        euler.z = euler.z + bodySwayZ + bodyBlockedSwayZ;
        body.localEulerAngles = euler;
    }

    private void KillCarBodyTiltTween()
    {
        if (carBodyTiltTween != null)
        {
            carBodyTiltTween.Kill();
            carBodyTiltTween = null;
        }

        bodyBlockedSwayZ = 0f;
    }

    private Transform GetCarBodyTransform()
    {
        Transform body = null;
        if (carBody != null)
        {
            body = carBody.transform;
        }
        else if (carBodyMeshRenderer != null)
        {
            body = carBodyMeshRenderer.transform;
        }

        if (body != null && !carBodyRestCached)
        {
            carBodyRestLocalEuler = body.localEulerAngles;
            carBodyRestCached = true;
        }

        return body;
    }

    private bool HasReachedFullExitBoostPoint()
    {
        if (parkingPath == null || parkingPath.Length < 3)
        {
            return false;
        }

        if (parkingPath[1] == null || parkingPath[2] == null)
        {
            return false;
        }

        Vector3 point2 = parkingPath[1].position;
        Vector3 point3 = parkingPath[2].position;
        Vector3 segment = point3 - point2;
        segment.y = 0f;

        float segmentSqr = segment.sqrMagnitude;
        if (segmentSqr < 0.0001f)
        {
            return false;
        }

        Vector3 toCar = transform.position - point2;
        toCar.y = 0f;
        float t = Vector3.Dot(toCar, segment) / segmentSqr;
        return t >= fullExitBoostSegmentT;
    }

    private void OnCarExitFull()
    {
        if (assignedSlot != null)
        {
            assignedSlot.isParked = false;
            assignedSlot = null;
        }

        if (GameManager.Instance != null)
        {
            GameManager.Instance.UnregisterMovingCar();
            GameManager.Instance.AddCarDone();
        }

        isMoving = false;
        _skipAheadCollision = false;
        _isOccupyingParkingLaneSegment = false;
        _isDepartingCarLineBeforePathPoint1 = false;
        ClearAheadCollisionState();
        Destroy(gameObject);
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
            _isOccupyingParkingLaneSegment = true;
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
            _isOccupyingParkingLaneSegment = false;
            PlayGuestPath(OnFromParkingGuestPathComplete);
            return;
        }

        // 3: thang Z xuong toi Z path[1]
        if (fromParkingStep == 3)
        {
            _skipAheadCollision = true;
            ClearAheadCollisionState();

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
        _skipAheadCollision = false;
        _isOccupyingParkingLaneSegment = false;
        ClearAheadCollisionState();
        PlayCarBodyParkBrakeTilt();

        if (GameManager.Instance != null)
        {
            GameManager.Instance.UnregisterMovingCar();

            if (GameManager.Instance.spawnManager != null)
            {
                GameManager.Instance.spawnManager.ResetGuestTriggersForCar(this);
            }
        }
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
        _isReversing = true;
        _pendingReverseCallback = onComplete;

        moveTween = transform
            .DOMove(target, moveSpeed)
            .SetSpeedBased()
            .SetEase(Ease.Linear)
            .OnComplete(OnMoveReverseComplete);
        BeginAcceleratedMove(moveSpeed * reverseSpeedMultiplier);
    }

    private void OnMoveReverseComplete()
    {
        _isReversing = false;
        TweenCallback cb = _pendingReverseCallback;
        _pendingReverseCallback = null;
        if (cb != null)
        {
            cb();
        }
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
            isOnGuestPathRoute = false;
            if (onComplete != null)
            {
                onComplete();
            }
            return;
        }

        isOnGuestPathRoute = true;
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
        BeginAcceleratedMove(moveSpeed);
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
        BeginAcceleratedMove(moveSpeed);
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

        KillSpeedTween();
    }

    private void OnDisable()
    {
        KillMoveTween();
        if (hoodTween != null)
        {
            hoodTween.Kill();
            hoodTween = null;
        }
        KillCarBodyTiltTween();
        bodyPitchX = 0f;
        bodySwayZ = 0f;
        bodyBlockedSwayZ = 0f;
        isMoving = false;
        _isBlockedByAhead = false;
        _isWaitingCollisionResume = false;
        _skipAheadCollision = false;
        _isOccupyingParkingLaneSegment = false;
        _isDepartingCarLineBeforePathPoint1 = false;
        KillCollisionResumeDelayTween();
        _isReversing = false;
        _pendingReverseCallback = null;
    }
}
