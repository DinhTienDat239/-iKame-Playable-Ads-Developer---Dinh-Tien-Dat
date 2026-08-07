using UnityEngine;
using DAT.Core.DesignPatterns;

public class GameManager : Singleton<GameManager>
{
    [Header("References")]
    [SerializeField] public ColorPalette colorPalette;
    [SerializeField] public GuestPath guestPath;
    [SerializeField] public SpawnManager spawnManager;
    [SerializeField] public ParkingSlotManager parkingSlotManager;
    [SerializeField] public CarLineManager carLineManager;

    private void Start()
    {
        Init();
    }

    public void Init()
    {
        if (spawnManager != null)
        {
            spawnManager.SpawnCars();
            spawnManager.SpawnGuests();
        }
    }
}
