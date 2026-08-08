using UnityEngine;

public class SpawnManager : MonoBehaviour
{
    // ========================= CAR SPAWNER =========================

    [Header("CAR SPAWNER / Prefabs")]
    [SerializeField] private GameObject car4Prefab;
    [SerializeField] private GameObject car6Prefab;
    [SerializeField] private GameObject car10Prefab;

    [Header("CAR SPAWNER / Layout")]
    [Range(3, 5)]
    [SerializeField] private int columnCount = 3;
    [SerializeField] private float firstLineZ;
    [SerializeField] private float columnSpacing = 2f;
    [SerializeField] private float spawnY;
    [SerializeField] private Transform carParent;

    [Header("CAR SPAWNER / Safe Distances")]
    [SerializeField] private float safeDistanceCar4 = 2f;
    [SerializeField] private float safeDistanceCar6 = 2.5f;
    [SerializeField] private float safeDistanceCar10 = 3.5f;

    [Header("CAR SPAWNER / Columns (index 0 = hang dau)")]
    [SerializeField] private CarSpawnData[] column0;
    [SerializeField] private CarSpawnData[] column1;
    [SerializeField] private CarSpawnData[] column2;
    [SerializeField] private CarSpawnData[] column3;
    [SerializeField] private CarSpawnData[] column4;

    // ========================= GUEST SPAWNER =========================

    [Header("GUEST SPAWNER / Prefab")]
    [SerializeField] private GameObject guestPrefab;
    [SerializeField] private Transform guestParent;

    [Header("GUEST SPAWNER / Layout")]
    [Range(1, 4)]
    [SerializeField] private int guestSpawnPosCount = 1;
    [SerializeField] private float guestSpacing = 0.6f;
    [SerializeField] private float guestCurveRadius = 2f;

    [Header("GUEST SPAWNER / Spawn Positions")]
    [SerializeField] private GuestSpawnPos[] guestSpawnPositions;

    [Header("GUEST SPAWNER / Color Orders (theo spawn pos)")]
    [SerializeField] private GuestColorSpawnData[] guestColors0;
    [SerializeField] private GuestColorSpawnData[] guestColors1;
    [SerializeField] private GuestColorSpawnData[] guestColors2;
    [SerializeField] private GuestColorSpawnData[] guestColors3;

    // ========================= CAR API =========================

    public float GetFirstLineZ()
    {
        return firstLineZ;
    }

    public float GetRightmostCarLineColumnX()
    {
        float centerOffset = (columnCount - 1) * 0.5f;
        int rightmostColumn = columnCount - 1;
        return (rightmostColumn - centerOffset) * columnSpacing;
    }

    public float GetSafeDistanceForType(Enums.CarType carType)
    {
        return GetSafeDistance(carType);
    }

    public void SpawnCars()
    {
        ClearCars();

        CarLineManager lineManager = null;
        if (GameManager.Instance != null)
        {
            lineManager = GameManager.Instance.carLineManager;
        }

        if (lineManager != null)
        {
            lineManager.ResetLines(columnCount);
        }

        float centerOffset = (columnCount - 1) * 0.5f;

        for (int col = 0; col < columnCount; col++)
        {
            CarSpawnData[] columnData = GetColumn(col);
            if (columnData == null || columnData.Length == 0)
            {
                continue;
            }

            float posX = (col - centerOffset) * columnSpacing;
            float posZ = firstLineZ;

            for (int row = 0; row < columnData.Length; row++)
            {
                CarSpawnData data = columnData[row];
                GameObject prefab = GetCarPrefab(data.carType);
                if (prefab == null)
                {
                    continue;
                }

                Vector3 position = new Vector3(posX, spawnY, posZ);
                Transform parent = transform;
                if (carParent != null)
                {
                    parent = carParent;
                }

                GameObject carObject = Instantiate(prefab, position, prefab.transform.rotation, parent);

                CarController car = carObject.GetComponent<CarController>();
                if (car != null)
                {
                    car.carType = data.carType;
                    car.carCapacity = GetCapacity(data.carType);
                    car.carColor = data.carColor;
                    car.isFirstLine = row == 0;
                    car.Init();

                    if (lineManager != null)
                    {
                        lineManager.RegisterCar(col, car);
                    }
                }

                if (row < columnData.Length - 1)
                {
                    CarSpawnData nextData = columnData[row + 1];
                    float gap = GetSafeDistance(data.carType) + GetSafeDistance(nextData.carType);
                    posZ = posZ - gap;
                }
            }
        }
    }

    public void ClearCars()
    {
        if (GameManager.Instance != null && GameManager.Instance.carLineManager != null)
        {
            GameManager.Instance.carLineManager.ClearLines();
        }

        if (carParent == null)
        {
            return;
        }

        for (int i = carParent.childCount - 1; i >= 0; i--)
        {
            Destroy(carParent.GetChild(i).gameObject);
        }
    }

    // ========================= GUEST API =========================

    public void SpawnGuests()
    {
        ClearGuests();

        if (guestPrefab == null || guestSpawnPositions == null)
        {
            return;
        }

        int posCount = guestSpawnPosCount;
        if (posCount > guestSpawnPositions.Length)
        {
            posCount = guestSpawnPositions.Length;
        }

        for (int posIndex = 0; posIndex < posCount; posIndex++)
        {
            GuestSpawnPos spawnPos = guestSpawnPositions[posIndex];
            if (spawnPos == null)
            {
                continue;
            }

            GuestColorSpawnData[] colorOrders = GetGuestColors(posIndex);
            if (colorOrders == null || colorOrders.Length == 0)
            {
                continue;
            }

            int guestIndex = 0;
            for (int orderIndex = 0; orderIndex < colorOrders.Length; orderIndex++)
            {
                GuestColorSpawnData order = colorOrders[orderIndex];
                int spawnCount = order.count;
                if (spawnCount < 0)
                {
                    spawnCount = 0;
                }

                for (int n = 0; n < spawnCount; n++)
                {
                    Vector3 localOffset = GetGuestLocalOffset(spawnPos.queueType, guestIndex);
                    Vector3 worldPos = spawnPos.transform.TransformPoint(localOffset);

                    Transform parent = transform;
                    if (guestParent != null)
                    {
                        parent = guestParent;
                    }

                    Quaternion rotation = GetGuestRotation(spawnPos, spawnPos.queueType);
                    GameObject guestObject = Instantiate(guestPrefab, worldPos, rotation, parent);

                    GuestController guest = guestObject.GetComponent<GuestController>();
                    if (guest != null)
                    {
                        guest.guestColor = order.color;
                        guest.Init();
                        spawnPos.RegisterGuest(guest);
                    }

                    spawnPos.UpdateGuestLeftDisplay();
                    guestIndex = guestIndex + 1;
                }
            }
        }
    }

    public void ClearGuests()
    {
        if (guestParent == null)
        {
            return;
        }

        for (int i = guestParent.childCount - 1; i >= 0; i--)
        {
            Destroy(guestParent.GetChild(i).gameObject);
        }
    }

    public void ResetGuestTriggersForCar(CarController car)
    {
        if (car == null || guestSpawnPositions == null)
        {
            return;
        }

        for (int i = 0; i < guestSpawnPositions.Length; i++)
        {
            if (guestSpawnPositions[i] != null)
            {
                guestSpawnPositions[i].ResetCarTrigger(car);
            }
        }
    }

    public bool IsAnyCarOccupyingParkingLaneSegment()
    {
        if (carParent == null)
        {
            return false;
        }

        for (int i = 0; i < carParent.childCount; i++)
        {
            CarController car = carParent.GetChild(i).GetComponent<CarController>();
            if (car != null && car.IsOccupyingParkingLaneSegment())
            {
                return true;
            }
        }

        return false;
    }

    public bool IsAnyCarDepartingCarLineBeforeParkingPathPoint1()
    {
        if (carParent == null)
        {
            return false;
        }

        for (int i = 0; i < carParent.childCount; i++)
        {
            CarController car = carParent.GetChild(i).GetComponent<CarController>();
            if (car != null && car.IsDepartingCarLineBeforeParkingPathPoint1())
            {
                return true;
            }
        }

        return false;
    }

    public bool AreAllGuestSpawnPosEmpty()
    {
        if (guestSpawnPositions == null)
        {
            return true;
        }

        for (int i = 0; i < guestSpawnPositions.Length; i++)
        {
            GuestSpawnPos spawnPos = guestSpawnPositions[i];
            if (spawnPos != null && spawnPos.HasGuests())
            {
                return false;
            }
        }

        return true;
    }

    // ========================= CAR HELPERS =========================

    private CarSpawnData[] GetColumn(int columnIndex)
    {
        if (columnIndex == 0)
        {
            return column0;
        }

        if (columnIndex == 1)
        {
            return column1;
        }

        if (columnIndex == 2)
        {
            return column2;
        }

        if (columnIndex == 3)
        {
            return column3;
        }

        if (columnIndex == 4)
        {
            return column4;
        }

        return null;
    }

    private GameObject GetCarPrefab(Enums.CarType carType)
    {
        if (carType == Enums.CarType.Car4)
        {
            return car4Prefab;
        }

        if (carType == Enums.CarType.Car6)
        {
            return car6Prefab;
        }

        if (carType == Enums.CarType.Car10)
        {
            return car10Prefab;
        }

        return null;
    }

    private int GetCapacity(Enums.CarType carType)
    {
        if (carType == Enums.CarType.Car4)
        {
            return 4;
        }

        if (carType == Enums.CarType.Car6)
        {
            return 6;
        }

        if (carType == Enums.CarType.Car10)
        {
            return 10;
        }

        return 0;
    }

    private float GetSafeDistance(Enums.CarType carType)
    {
        if (carType == Enums.CarType.Car4)
        {
            return safeDistanceCar4;
        }

        if (carType == Enums.CarType.Car6)
        {
            return safeDistanceCar6;
        }

        if (carType == Enums.CarType.Car10)
        {
            return safeDistanceCar10;
        }

        return safeDistanceCar4;
    }

    // ========================= GUEST HELPERS =========================

    public Vector3 GetGuestQueueLocalOffset(Enums.GuestQueueType queueType, int index)
    {
        return GetGuestLocalOffset(queueType, index);
    }

    public Quaternion GetGuestQueueRotation(GuestSpawnPos spawnPos, Enums.GuestQueueType queueType)
    {
        return GetGuestRotation(spawnPos, queueType);
    }

    private GuestColorSpawnData[] GetGuestColors(int posIndex)
    {
        if (posIndex == 0)
        {
            return guestColors0;
        }

        if (posIndex == 1)
        {
            return guestColors1;
        }

        if (posIndex == 2)
        {
            return guestColors2;
        }

        if (posIndex == 3)
        {
            return guestColors3;
        }

        return null;
    }

    private Vector3 GetGuestLocalOffset(Enums.GuestQueueType queueType, int index)
    {
        if (index <= 0)
        {
            return Vector3.zero;
        }

        float distance = index * guestSpacing;

        if (queueType == Enums.GuestQueueType.StraightUp)
        {
            return new Vector3(0f, 0f, distance);
        }

        if (queueType == Enums.GuestQueueType.StraightLeft)
        {
            return new Vector3(-distance, 0f, 0f);
        }

        if (queueType == Enums.GuestQueueType.StraightRight)
        {
            return new Vector3(distance, 0f, 0f);
        }

        // Curve: cung 90 do (len tren roi re) roi di thang sang trai/phai
        float arcLength = guestCurveRadius * (Mathf.PI * 0.5f);

        if (queueType == Enums.GuestQueueType.CurveLeft)
        {
            if (distance <= arcLength)
            {
                float angle = distance / guestCurveRadius;
                float x = -guestCurveRadius + guestCurveRadius * Mathf.Cos(angle);
                float z = guestCurveRadius * Mathf.Sin(angle);
                return new Vector3(x, 0f, z);
            }

            float straight = distance - arcLength;
            return new Vector3(-guestCurveRadius - straight, 0f, guestCurveRadius);
        }

        if (queueType == Enums.GuestQueueType.CurveRight)
        {
            if (distance <= arcLength)
            {
                float angle = distance / guestCurveRadius;
                float x = guestCurveRadius - guestCurveRadius * Mathf.Cos(angle);
                float z = guestCurveRadius * Mathf.Sin(angle);
                return new Vector3(x, 0f, z);
            }

            float straight = distance - arcLength;
            return new Vector3(guestCurveRadius + straight, 0f, guestCurveRadius);
        }

        return new Vector3(0f, 0f, distance);
    }

    private Quaternion GetGuestRotation(GuestSpawnPos spawnPos, Enums.GuestQueueType queueType)
    {
        Vector3 localLook = new Vector3(0f, 0f, -1f);

        if (queueType == Enums.GuestQueueType.StraightUp)
        {
            // Huong xuong
            localLook = new Vector3(0f, 0f, -1f);
        }
        else if (queueType == Enums.GuestQueueType.StraightLeft)
        {
            // Huong sang phai
            localLook = new Vector3(1f, 0f, 0f);
        }
        else if (queueType == Enums.GuestQueueType.StraightRight)
        {
            // Huong sang trai
            localLook = new Vector3(-1f, 0f, 0f);
        }
        else if (queueType == Enums.GuestQueueType.CurveLeft)
        {
            // Cheo xuong-phai
            localLook = new Vector3(1f, 0f, -1f);
        }
        else if (queueType == Enums.GuestQueueType.CurveRight)
        {
            // Cheo xuong-trai
            localLook = new Vector3(-1f, 0f, -1f);
        }

        Vector3 worldLook = spawnPos.transform.TransformDirection(localLook);
        worldLook.y = 0f;
        if (worldLook.sqrMagnitude < 0.0001f)
        {
            return spawnPos.transform.rotation;
        }

        return Quaternion.LookRotation(worldLook.normalized, Vector3.up);
    }
}
