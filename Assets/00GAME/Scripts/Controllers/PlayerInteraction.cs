using UnityEngine;

public class PlayerInteraction : MonoBehaviour
{
    [SerializeField] private Camera raycastCamera;
    [SerializeField] private float rayDistance = 200f;

    private void Awake()
    {
        if (raycastCamera == null)
        {
            raycastCamera = Camera.main;
        }
    }

    private void Update()
    {
        if (!Input.GetMouseButtonDown(0))
        {
            return;
        }
        if(GameManager.Instance.isWin || GameManager.Instance.isLose || GameManager.Instance.moveCount >= GameManager.Instance.moveLimit){
            Luna.Unity.Playable.InstallFullGame();
            Luna.Unity.LifeCycle.GameEnded();
        }

        if (raycastCamera == null)
        {
            return;
        }

        Ray ray = raycastCamera.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;

        if (!Physics.Raycast(ray, out hit, rayDistance, Physics.DefaultRaycastLayers, QueryTriggerInteraction.Collide))
        {
            return;
        }

        CarController car = hit.collider.GetComponentInParent<CarController>();
        if (car == null)
        {
            return;
        }

        ParkingSlotManager parkingSlotManager = GameManager.Instance.parkingSlotManager;
        if (parkingSlotManager != null)
        {
            parkingSlotManager.TrySendCar(car);
        }
    }
}
