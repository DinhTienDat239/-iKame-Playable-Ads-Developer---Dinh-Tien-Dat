using System.Collections.Generic;
using DAT.Managers;
using UnityEngine;

public class CarLineManager : MonoBehaviour
{
    private const int MaxVisibleCarsPerColumn = 5;

    [Header("Car Line Depart Queue")]
    [SerializeField] private float carLineDepartQueueCheckInterval = 0.25f;

    private List<CarController>[] columns;
    private CarController[] pendingDepartCar;
    private readonly List<CarController> carLineDepartQueue = new List<CarController>();
    private float carLineDepartQueueTimer;

    public void ResetLines(int columnCount)
    {
        columns = new List<CarController>[columnCount];
        pendingDepartCar = new CarController[columnCount];
        for (int i = 0; i < columnCount; i++)
        {
            columns[i] = new List<CarController>();
        }
    }

    public void ClearLines()
    {
        if (columns == null)
        {
            return;
        }

        for (int i = 0; i < columns.Length; i++)
        {
            if (columns[i] != null)
            {
                columns[i].Clear();
            }

            if (pendingDepartCar != null && i < pendingDepartCar.Length)
            {
                pendingDepartCar[i] = null;
            }
        }

        carLineDepartQueue.Clear();
    }

    private void Update()
    {
        if (carLineDepartQueue.Count == 0)
        {
            return;
        }

        carLineDepartQueueTimer = carLineDepartQueueTimer + Time.deltaTime;
        if (carLineDepartQueueTimer < carLineDepartQueueCheckInterval)
        {
            return;
        }

        carLineDepartQueueTimer = 0f;
        ProcessCarLineDepartQueue();
    }

    public bool TrySendLineCar(CarController car, Transform[] parkingPath)
    {
        if (IsAnyCarDepartingBeforeParkingPathPoint1())
        {
            car.PlayParkingLaneBlockedSway();
            AudioManager.Instance.PlaySFX(GameManager.Instance.fullRoadWarningSound);
            EnqueueCarLineDepart(car);
            return false;
        }

        return TrySendLineCarImmediate(car, parkingPath);
    }

    private void EnqueueCarLineDepart(CarController car)
    {
        if (car == null || !car.isFirstLine || car.isMoving)
        {
            return;
        }

        if (IsCarInCarLineDepartQueue(car))
        {
            return;
        }

        carLineDepartQueue.Add(car);
    }

    private bool IsCarInCarLineDepartQueue(CarController car)
    {
        for (int i = 0; i < carLineDepartQueue.Count; i++)
        {
            if (carLineDepartQueue[i] == car)
            {
                return true;
            }
        }

        return false;
    }

    private void ProcessCarLineDepartQueue()
    {
        CleanupCarLineDepartQueue();

        if (carLineDepartQueue.Count == 0)
        {
            return;
        }

        GameManager gameManager = GameManager.Instance;
        if (gameManager == null || gameManager.parkingSlotManager == null)
        {
            return;
        }

        Transform[] parkingPath = gameManager.parkingSlotManager.parkingPath;
        CarController car = carLineDepartQueue[0];

        if (TrySendLineCarImmediate(car, parkingPath))
        {
            carLineDepartQueue.RemoveAt(0);
        }
    }

    private void CleanupCarLineDepartQueue()
    {
        for (int i = carLineDepartQueue.Count - 1; i >= 0; i--)
        {
            CarController car = carLineDepartQueue[i];
            if (car == null || !car.isFirstLine || car.isMoving)
            {
                carLineDepartQueue.RemoveAt(i);
            }
        }
    }

    private bool TrySendLineCarImmediate(CarController car, Transform[] parkingPath)
    {
        if (car == null || !car.isFirstLine || car.isMoving)
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

        if (IsAnyCarDepartingBeforeParkingPathPoint1())
        {
            return false;
        }

        gameManager.RegisterMovingCar();
        car.GoInLine(null, parkingPath);

        if (!gameManager.isTutorialDone)
        {
            gameManager.isTutorialDone = true;
            gameManager.HideTutorialObjects();
        }

        NotifyCarDeparted(car);
        return true;
    }

    private bool IsAnyCarDepartingBeforeParkingPathPoint1()
    {
        GameManager gameManager = GameManager.Instance;
        if (gameManager == null || gameManager.spawnManager == null)
        {
            return false;
        }

        return gameManager.spawnManager.IsAnyCarDepartingCarLineBeforeParkingPathPoint1();
    }

    public void RegisterCar(int columnIndex, CarController car)
    {
        if (columns == null || car == null)
        {
            return;
        }

        if (columnIndex < 0 || columnIndex >= columns.Length)
        {
            return;
        }

        columns[columnIndex].Add(car);
        RefreshColumnCarBodyVisibility(columnIndex);
    }

    public void NotifyCarDeparted(CarController car)
    {
        if (car == null || columns == null)
        {
            return;
        }

        int columnIndex = FindColumnIndex(car);
        if (columnIndex < 0)
        {
            return;
        }

        columns[columnIndex].Remove(car);
        car.isFirstLine = false;

        if (car.isOutOfCarLine)
        {
            AdvanceColumn(columnIndex);
        }
        else if (pendingDepartCar != null && columnIndex < pendingDepartCar.Length)
        {
            pendingDepartCar[columnIndex] = car;
        }
    }

    public void OnDepartedCarReachedTurnPoint(CarController car)
    {
        if (car == null || pendingDepartCar == null)
        {
            return;
        }

        for (int i = 0; i < pendingDepartCar.Length; i++)
        {
            if (pendingDepartCar[i] != car)
            {
                continue;
            }

            pendingDepartCar[i] = null;
            AdvanceColumn(i);
            return;
        }
    }

    private void AdvanceColumn(int columnIndex)
    {
        List<CarController> column = columns[columnIndex];
        if (column == null || column.Count == 0)
        {
            return;
        }

        SpawnManager spawnManager = GameManager.Instance.spawnManager;
        if (spawnManager == null)
        {
            return;
        }

        float posX = column[0].transform.position.x;
        float posY = column[0].transform.position.y;
        float posZ = spawnManager.GetFirstLineZ();

        for (int i = 0; i < column.Count; i++)
        {
            CarController car = column[i];
            if (car == null)
            {
                continue;
            }

            car.isFirstLine = false;

            Vector3 target = new Vector3(posX, posY, posZ);
            car.MoveInQueue(target, i == 0);

            if (i < column.Count - 1)
            {
                CarController nextCar = column[i + 1];
                if (nextCar != null)
                {
                    float gap = spawnManager.GetSafeDistanceForType(car.carType)
                        + spawnManager.GetSafeDistanceForType(nextCar.carType);
                    posZ = posZ - gap;
                }
            }
        }

        RefreshColumnCarBodyVisibility(columnIndex);
    }

    private void RefreshColumnCarBodyVisibility(int columnIndex)
    {
        if (columns == null || columnIndex < 0 || columnIndex >= columns.Length)
        {
            return;
        }

        List<CarController> column = columns[columnIndex];
        if (column == null)
        {
            return;
        }

        for (int i = 0; i < column.Count; i++)
        {
            CarController car = column[i];
            if (car == null)
            {
                continue;
            }

            car.SetCarBodyVisible(i < MaxVisibleCarsPerColumn);
        }
    }

    private int FindColumnIndex(CarController car)
    {
        for (int i = 0; i < columns.Length; i++)
        {
            List<CarController> column = columns[i];
            if (column == null)
            {
                continue;
            }

            for (int j = 0; j < column.Count; j++)
            {
                if (column[j] == car)
                {
                    return i;
                }
            }
        }

        return -1;
    }
}
