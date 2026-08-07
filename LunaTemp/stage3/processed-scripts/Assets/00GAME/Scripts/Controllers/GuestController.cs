using UnityEngine;

public class GuestController : MonoBehaviour
{
    [Header("Guest Properties")]
    [SerializeField] public Enums.GameColor guestColor;

    [Header("References")]
    [SerializeField] private SkinnedMeshRenderer meshRendererBody;

    public void Init()
    {
        Material mat = GameManager.Instance.colorPalette.GetHumanMaterial(guestColor);
        meshRendererBody.sharedMaterial = mat;
    }
}
