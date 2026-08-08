using System.Collections.Generic;
using DAT.Managers;
using UnityEngine;

public class ParkingSlotManager : MonoBehaviour
{
    [Header("Slots")]
    [SerializeField] public ParkingSlotController[] parkingSlots;

    [Header("Parking Path (3 diem)")]
    [SerializeField] public Transform[] parkingPath;

    [Header("Park Exit Queue")]
    [SerializeField] private float parkExitQueueCheckInterval = 0.25f;

    private readonly List<CarController> parkExitQueue = new List<CarController>();
    private float parkExitQueueTimer;

    private void Update()
    {
        if (parkExitQueue.Count == 0)
        {
            return;
        }

        parkExitQueueTimer = parkExitQueueTimer + Time.deltaTime;
        if (parkExitQueueTimer < parkExitQueueCheckInterval)
        {
            return;
        }

        parkExitQueueTimer = 0f;
        ProcessParkExitQueue();
    }

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
        if (gameManager == null)
        {
            return false;
        }

        bool canSendParkedCar = car.isParked;
        bool canSendLineCar = car.isFirstLine;
        if (!canSendParkedCar && !canSendLineCar)
        {
            return false;
        }

        if (!gameManager.CanStartMoving())
        {
            if (!gameManager.isWin
                && !gameManager.isLose
                && gameManager.movingCarCount >= gameManager.movingCarLimit
                && gameManager.uiManager != null)
            {
                gameManager.uiManager.WarnMaxCarMoving();
                AudioManager.Instance.PlaySFX(GameManager.Instance.fullRoadWarningSound);
            }

            return false;
        }

        // Xe dang do o parking: giai phong slot -> GoForGuest -> tim slot trong sau
        if (car.isParked)
        {
            if (gameManager.spawnManager != null
                && gameManager.spawnManager.IsAnyCarOccupyingParkingLaneSegment())
            {
                car.PlayParkingLaneBlockedSway();
                AudioManager.Instance.PlaySFX(GameManager.Instance.fullRoadWarningSound);
                EnqueueParkExit(car);
                return false;
            }

            return TrySendParkedCarImmediate(car);
        }

        if (gameManager.carLineManager != null)
        {
            return gameManager.carLineManager.TrySendLineCar(car, parkingPath);
        }

        gameManager.RegisterMovingCar();
        car.GoInLine(null, parkingPath);
        if (!gameManager.isTutorialDone)
        {
            gameManager.isTutorialDone = true;
            gameManager.HideTutorialObjects();
        }
        return true;
    }

    private void EnqueueParkExit(CarController car)
    {
        if (car == null || !car.isParked)
        {
            return;
        }

        if (IsCarInParkExitQueue(car))
        {
            return;
        }

        parkExitQueue.Add(car);
    }

    private bool IsCarInParkExitQueue(CarController car)
    {
        for (int i = 0; i < parkExitQueue.Count; i++)
        {
            if (parkExitQueue[i] == car)
            {
                return true;
            }
        }

        return false;
    }

    private void ProcessParkExitQueue()
    {
        CleanupParkExitQueue();

        if (parkExitQueue.Count == 0)
        {
            return;
        }

        CarController car = parkExitQueue[0];
        if (TrySendParkedCarImmediate(car))
        {
            parkExitQueue.RemoveAt(0);
        }
    }

    private void CleanupParkExitQueue()
    {
        for (int i = parkExitQueue.Count - 1; i >= 0; i--)
        {
            CarController car = parkExitQueue[i];
            if (car == null || !car.isParked)
            {
                parkExitQueue.RemoveAt(i);
            }
        }
    }

    private bool TrySendParkedCarImmediate(CarController car)
    {
        if (car == null || !car.isParked || car.isMoving)
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

        if (gameManager.spawnManager != null
            && gameManager.spawnManager.IsAnyCarOccupyingParkingLaneSegment())
        {
            return false;
        }

        car.ReleaseParkingSlot();
        gameManager.RegisterMovingCar();
        car.GoFromParking(parkingPath);
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

    public ParkingSlotController ReserveFreeSlot()
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
                slot.isParked = true;
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
