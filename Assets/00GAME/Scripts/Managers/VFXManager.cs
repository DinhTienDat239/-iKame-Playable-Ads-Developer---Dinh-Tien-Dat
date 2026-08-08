using DAT.Core.DesignPatterns;
using UnityEngine;

public class VFXManager : Singleton<VFXManager>
{
    [Header("VFX")]
    [SerializeField] private GameObject vfxCarDone;
    public void SpawnCarDoneVFX(Vector3 position)
    {
        Instantiate(vfxCarDone, position, Quaternion.identity);
    }
}
