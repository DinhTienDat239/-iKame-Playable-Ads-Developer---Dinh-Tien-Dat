using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GuestSpawnPos : MonoBehaviour
{
    [Header("References")]
    [SerializeField] public TextMeshProUGUI guestLeftDisplayTxt;
    [SerializeField] public Enums.GuestQueueType queueType = Enums.GuestQueueType.StraightUp;

    private List<GuestController> guestQueue = new List<GuestController>();
    private List<CarController> triggeredCars = new List<CarController>();

    private bool HasCarTriggered(CarController car)
    {
        for (int i = 0; i < triggeredCars.Count; i++)
        {
            if (triggeredCars[i] == car)
            {
                return true;
            }
        }

        return false;
    }

    private void MarkCarTriggered(CarController car)
    {
        if (car == null || HasCarTriggered(car))
        {
            return;
        }

        triggeredCars.Add(car);
    }

    public void ResetCarTrigger(CarController car)
    {
        if (car == null)
        {
            return;
        }

        triggeredCars.Remove(car);
    }

    public void RegisterGuest(GuestController guest)
    {
        if (guest == null)
        {
            return;
        }

        guestQueue.Add(guest);
    }

    public GuestController GetFrontGuest()
    {
        if (guestQueue.Count == 0)
        {
            return null;
        }

        return guestQueue[0];
    }

    public bool HasGuests()
    {
        return guestQueue.Count > 0;
    }

    public void RemoveGuest(GuestController guest)
    {
        guestQueue.Remove(guest);
        AdvanceQueue();
        UpdateGuestLeftDisplay();
    }

    public bool HasMatchingGuest(Enums.GameColor color)
    {
        GuestController front = GetFrontGuest();
        if (front == null)
        {
            return false;
        }

        return front.guestColor == color;
    }

    public void AdvanceQueue()
    {
        SpawnManager spawnManager = null;
        if (GameManager.Instance != null)
        {
            spawnManager = GameManager.Instance.spawnManager;
        }

        if (spawnManager == null)
        {
            return;
        }

        for (int i = 0; i < guestQueue.Count; i++)
        {
            GuestController guest = guestQueue[i];
            if (guest == null || guest.isOnCar)
            {
                continue;
            }

            Vector3 localOffset = spawnManager.GetGuestQueueLocalOffset(queueType, i);
            Vector3 worldPos = transform.TransformPoint(localOffset);
            Quaternion rotation = spawnManager.GetGuestQueueRotation(this, queueType);
            guest.MoveToQueueSlot(worldPos, rotation);
        }
    }

    public void UpdateGuestLeftDisplay()
    {
        guestLeftDisplayTxt.text = "" + guestQueue.Count;
    }

    private void OnTriggerEnter(Collider other)
    {
        CarController car = other.GetComponentInParent<CarController>();
        if (car == null)
        {
            return;
        }

        if (HasCarTriggered(car))
        {
            return;
        }

        MarkCarTriggered(car);
        car.TryPickupFromSpawnPos(this);
    }

#if UNITY_EDITOR
    private void OnDrawGizmos()
    {
        Gizmos.color = Color.yellow;
        Gizmos.DrawSphere(transform.position, 0.12f);
        Gizmos.DrawLine(transform.position, transform.position + transform.forward * 0.5f);
    }
#endif
}
