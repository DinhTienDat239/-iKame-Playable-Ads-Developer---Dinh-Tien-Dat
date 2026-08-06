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
        if (car != null)
        {
            car.GoForGuest();
        }
    }
}
