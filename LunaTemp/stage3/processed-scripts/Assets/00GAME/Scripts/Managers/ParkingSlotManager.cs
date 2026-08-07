using UnityEngine;

public class ParkingSlotManager : MonoBehaviour
{
    [Header("Slots")]
    [SerializeField] public ParkingSlotController[] parkingSlots;

    [Header("Parking Path (3 diem)")]
    [SerializeField] public Transform[] parkingPath;

    public bool TrySendCar(CarController car)
    {
        if (car == null)
        {
            return false;
        }

        if (car.isMoving)
        {
            return false;
        }

        if (parkingPath == null || parkingPath.Length < 3)
        {
            return false;
        }

        // Xe dang do o parking: lui ra path -> GoForGuest -> ve lai slot
        if (car.isParked)
        {
            car.GoFromParking(parkingPath);
            return true;
        }

        // Xe hang dau: vao parking lan dau
        if (!car.isFirstLine)
        {
            return false;
        }

        ParkingSlotController freeSlot = GetFreeSlot();
        if (freeSlot == null)
        {
            return false;
        }

        freeSlot.isParked = true;
        car.GoInLine(freeSlot, parkingPath);

        if (GameManager.Instance != null && GameManager.Instance.carLineManager != null)
        {
            GameManager.Instance.carLineManager.NotifyCarDeparted(car);
        }

        return true;
    }

    public ParkingSlotController GetFreeSlot()
    {
        if (parkingSlots == null)
        {
            return null;
        }

        for (int i = 0; i < parkingSlots.Length; i++)
        {
            ParkingSlotController slot = parkingSlots[i];
            if (slot != null && !slot.isParked)
            {
                return slot;
            }
        }

        return null;
    }

    public bool HasFreeSlot()
    {
        return GetFreeSlot() != null;
    }
}
