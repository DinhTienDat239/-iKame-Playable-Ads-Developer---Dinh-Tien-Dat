using UnityEngine;
using DAT.Core.DesignPatterns;

public class GameManager : Singleton<GameManager>
{
    [Header("Gameplay")]
    [SerializeField] public float guestPickupInterval = 0.2f;

    [Header("References")]
    [SerializeField] public ColorPalette colorPalette;
    [SerializeField] public GuestPath guestPath;
    [SerializeField] public SpawnManager spawnManager;
    [SerializeField] public ParkingSlotManager parkingSlotManager;
    [SerializeField] public CarLineManager carLineManager;

    public int carDone;

    private void Start()
    {
        Init();
    }

    public void Init()
    {
        carDone = 0;
        if (spawnManager != null)
        {
            spawnManager.SpawnCars();
            spawnManager.SpawnGuests();
        }
    }

    public void AddCarDone()
    {
        carDone = carDone + 1;
    }
}
