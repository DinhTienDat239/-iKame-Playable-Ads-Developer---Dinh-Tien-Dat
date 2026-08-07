using UnityEngine;
using DAT.Core.DesignPatterns;

public class GameManager : Singleton<GameManager>
{
    [Header("Gameplay")]
    [SerializeField] public float guestPickupInterval = 0.2f;
    [SerializeField] public int movingCarLimit = 3;

    [Header("References")]
    [SerializeField] public ColorPalette colorPalette;
    [SerializeField] public GuestPath guestPath;
    [SerializeField] public SpawnManager spawnManager;
    [SerializeField] public ParkingSlotManager parkingSlotManager;
    [SerializeField] public CarLineManager carLineManager;

    public int carDone;
    public int movingCarCount;
    public bool isWin;
    public bool isLose;

    private void Start()
    {
        Init();
    }

    public void Init()
    {
        carDone = 0;
        movingCarCount = 0;
        isWin = false;
        isLose = false;
        if (spawnManager != null)
        {
            spawnManager.SpawnCars();
            spawnManager.SpawnGuests();
        }
    }

    public bool CanStartMoving()
    {
        if (isWin || isLose)
        {
            return false;
        }

        return movingCarCount < movingCarLimit;
    }

    public void RegisterMovingCar()
    {
        movingCarCount = movingCarCount + 1;
    }

    public void UnregisterMovingCar()
    {
        if (movingCarCount > 0)
        {
            movingCarCount = movingCarCount - 1;
        }
    }

    public void CheckWinOnFullCapacity()
    {
        if (isWin || isLose)
        {
            return;
        }

        if (spawnManager != null && spawnManager.AreAllGuestSpawnPosEmpty())
        {
            isWin = true;
        }
    }

    public void SetLose()
    {
        if (isWin || isLose)
        {
            return;
        }

        isLose = true;
    }

    public void AddCarDone()
    {
        carDone = carDone + 1;
    }
}
