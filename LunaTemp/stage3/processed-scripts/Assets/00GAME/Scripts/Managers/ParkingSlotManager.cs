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

        GameManager gameManager = GameManager.Instance;
        if (gameManager == null || !gameManager.CanStartMoving())
        {
            return false;
        }

        // Xe dang do o parking: giai phong slot -> GoForGuest -> tim slot trong sau
        if (car.isParked)
        {
            car.ReleaseParkingSlot();
            gameManager.RegisterMovingCar();
            car.GoFromParking(parkingPath);
            return true;
        }

        // Xe hang dau: khong can slot trong luc xuat phat
        if (!car.isFirstLine)
        {
            return false;
        }

        gameManager.RegisterMovingCar();
        car.GoInLine(null, parkingPath);

        if (gameManager.carLineManager != null)
        {
            gameManager.carLineManager.NotifyCarDeparted(car);
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
