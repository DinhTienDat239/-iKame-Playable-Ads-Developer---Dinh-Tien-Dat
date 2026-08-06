using UnityEngine;
using DAT.Core.DesignPatterns;

public class GameManager : Singleton<GameManager>
{
    [Header("References")]
    [SerializeField] public ColorPalette colorPalette;
    [SerializeField] public GuestPath guestPath;
}
