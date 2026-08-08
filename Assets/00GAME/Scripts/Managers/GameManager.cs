using UnityEngine;
using DAT.Core.DesignPatterns;
using DAT.Managers;
using DG.Tweening;

public class GameManager : Singleton<GameManager>
{
    [Header("Gameplay")]
    [SerializeField] public float guestPickupInterval = 0.2f;
    [SerializeField] public int movingCarLimit = 3;
    [SerializeField] public int moveLimit = 99;
    [SerializeField] public int moveCount = 0;

    [Header("References")]
    [SerializeField] public ColorPalette colorPalette;
    [SerializeField] public GuestPath guestPath;
    [SerializeField] public SpawnManager spawnManager;
    [SerializeField] public ParkingSlotManager parkingSlotManager;
    [SerializeField] public CarLineManager carLineManager;
    [SerializeField] public BarrierController barrierController;
    [SerializeField] public UIManager uiManager;
    [SerializeField] public GameObject[] tutorialObjects;

    public int carDone;
    public int movingCarCount;
    public bool isWin;
    public bool isLose;
    public bool isTutorialDone;
    [Header("Audio")]
    [SerializeField] public AudioClip BGM;
    [SerializeField] public AudioClip carDoneSound;
    [SerializeField] public AudioClip carHopInSound;
    [SerializeField] public AudioClip fullRoadWarningSound;
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
        isTutorialDone = false;
        if (spawnManager != null)
        {
            spawnManager.SpawnCars();
            spawnManager.SpawnGuests();
        }

        if (uiManager != null)
        {
            uiManager.UpdateCarMovingDisplay();
        }

        AudioManager.Instance.PlayMusic(BGM);
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
        moveCount = moveCount + 1;
        if (uiManager != null)
        {
            uiManager.UpdateCarMovingDisplay();
        }
    }

    public void UnregisterMovingCar()
    {
        if (movingCarCount > 0)
        {
            movingCarCount = movingCarCount - 1;
        }

        if (uiManager != null)
        {
            uiManager.UpdateCarMovingDisplay();
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

            if (uiManager != null)
            {
                uiManager.ShowWinScreen();
            }
        }
    }

    public void SetLose()
    {
        if (isWin || isLose)
        {
            return;
        }

        isLose = true;

        if (uiManager != null)
        {
            uiManager.ShowLoseScreen();
        }
    }

    public void AddCarDone()
    {
        carDone = carDone + 1;
    }
    public void HideTutorialObjects(){
        if (uiManager != null)
        {
            uiManager.tutorialTxt.DOFade(0f, 0.5f).SetEase(Ease.OutQuad).OnComplete(() => {
                uiManager.tutorialTxt.gameObject.SetActive(false);
            });

        }
         for (int i = 0; i < tutorialObjects.Length; i++)
         {
            tutorialObjects[i].SetActive(false);
         }
    }
}
