using UnityEngine;

[CreateAssetMenu(fileName = "ColorPalette", menuName = "Game/Color Palette")]
public class ColorPalette : ScriptableObject
{
    [System.Serializable]
    public struct ColorEntry
    {
        public Enums.GameColor color;
        public Material carMaterial;
        public Material humanMaterial;
    }

    public ColorEntry[] entries;

    public Material GetCarMaterial(Enums.GameColor color)
    {
        for (int i = 0; i < entries.Length; i++)
            if (entries[i].color == color)
                return entries[i].carMaterial;
        return null;
    }

    public Material GetHumanMaterial(Enums.GameColor color)
    {
        for (int i = 0; i < entries.Length; i++)
            if (entries[i].color == color)
                return entries[i].humanMaterial;
        return null;
    }
}
