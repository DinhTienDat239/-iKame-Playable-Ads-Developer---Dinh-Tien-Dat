using UnityEngine;
using DG.Tweening;

public class CarController : MonoBehaviour
{
    [Header("Car Properties")]
    [SerializeField] public int carCapacity;
    [SerializeField] public Enums.GameColor carColor;

    [Header("Movement")]
    [SerializeField] private float guestPathSpeed = 8f;

    [Header("References")]
    [SerializeField] private MeshRenderer carBodyMeshRenderer;
    [SerializeField] private MeshRenderer carHoodMeshRenderer;

    public bool isMoving;

    private Tween moveTween;

    public void Init()
    {
        Material mat = GameManager.Instance.colorPalette.GetCarMaterial(carColor);
        carBodyMeshRenderer.material = mat;
        carHoodMeshRenderer.material = mat;
    }

    public void GoToLine()
    {
        // TODO: di vao slot bai do
    }

    public void GoForGuest()
    {
        if (isMoving)
        {
            return;
        }

        GuestPath path = GameManager.Instance.guestPath;
        if (path == null || !path.HasWaypoints())
        {
            return;
        }

        Vector3[] waypoints = path.GetPositions();
        Vector3[] route = BuildRouteFromCurrent(waypoints);

        isMoving = true;

        if (moveTween != null)
        {
            moveTween.Kill();
        }

        moveTween = transform
            .DOPath(route, guestPathSpeed, PathType.CatmullRom)
            .SetSpeedBased()
            .SetEase(Ease.Linear)
            .SetLookAt(0.05f)
            .OnComplete(OnGuestPathComplete);
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

    private void OnGuestPathComplete()
    {
        isMoving = false;
        // TODO: xu ly sau khi het duong
    }

    private void OnDisable()
    {
        if (moveTween != null)
        {
            moveTween.Kill();
        }

        isMoving = false;
    }
}
