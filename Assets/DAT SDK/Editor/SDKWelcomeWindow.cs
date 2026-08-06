using UnityEditor;
using UnityEngine;

namespace DAT.Editor
{
public class SDKWelcomeWindow : EditorWindow
{
    private static readonly string PrefKey = "MySDK_WelcomeShown";
    private static readonly Vector2 WindowSize = new Vector2(500, 600);
    private static Texture2D logoTexture;

    private GUIStyle titleStyle;
    private GUIStyle titleShadowStyle;
    private GUIStyle introStyle;

    [InitializeOnLoadMethod]
    static void InitOnLoad()
    {
        //EditorPrefs.DeleteKey("MySDK_WelcomeShown"); // Xoá dòng này nếu không muốn hiện lại mỗi lần

        if (!EditorPrefs.GetBool(PrefKey, false))
        {
            EditorApplication.update += ShowWindowOnce;
        }
    }

    static void ShowWindowOnce()
    {
        EditorApplication.update -= ShowWindowOnce;
        ShowWindow();
    }

    public static void ShowWindow()
    {
        SDKWelcomeWindow window = GetWindow<SDKWelcomeWindow>(true, "DAT PAA SDK", true);
        window.minSize = WindowSize;
        window.maxSize = WindowSize;
        window.Show();
    }

    [MenuItem("DAT SDK/Welcome Panel")]
    public static void ShowWelcomePanelFromMenu()
    {
        ShowWindow();
    }

    private void OnEnable()
    {
        logoTexture = AssetDatabase.LoadAssetAtPath<Texture2D>(
            "Assets/DAT SDK/Editor/logo.png"
        );
    }

    private void InitStyles()
    {
        if (titleStyle == null)
        {
            titleStyle = new GUIStyle(EditorStyles.label)
            {
                alignment = TextAnchor.MiddleCenter,
                fontSize = 28,
                fontStyle = FontStyle.BoldAndItalic,
                richText = true,
                normal = { textColor = new Color(1f, 0.55f, 0f) }
            };
        }

        if (titleShadowStyle == null)
        {
            titleShadowStyle = new GUIStyle(titleStyle)
            {
                normal = { textColor = new Color(0.15f, 0.08f, 0.02f, 0.45f) }
            };
        }

        if (introStyle == null)
        {
            introStyle = new GUIStyle(EditorStyles.wordWrappedLabel)
            {
                alignment = TextAnchor.MiddleCenter,
                fontSize = 13,
                wordWrap = true
            };
        }
    }

    private void OnGUI()
    {
        InitStyles();
        GUILayout.Space(20);

        // Logo
        if (logoTexture != null)
        {
            GUILayout.BeginHorizontal();
            GUILayout.FlexibleSpace();
            GUILayout.Label(logoTexture, GUILayout.Width(300), GUILayout.Height(225));
            GUILayout.FlexibleSpace();
            GUILayout.EndHorizontal();
        }

        GUILayout.Space(2);

        // Tiêu đề
        Rect titleRect = GUILayoutUtility.GetRect(0, 34, GUILayout.ExpandWidth(true));
        Rect shadowRect = new Rect(titleRect.x + 1.5f, titleRect.y + 1.5f, titleRect.width, titleRect.height);
        GUI.Label(shadowRect, "<b><i>DAT PAA SDK</i></b>", titleShadowStyle);
        GUI.Label(titleRect, "<b><i>DAT PAA SDK</i></b>", titleStyle);

        GUILayout.Space(10);

        // Giới thiệu
        GUILayout.BeginHorizontal();
        GUILayout.FlexibleSpace();
        GUILayout.Label(
            "This SDK is working for Playable Ads development on Unity Playwork Only.\n" +
            "Please understand that this SDK is still under development for long-term.\n"+ 
            "Any feedback, please contact us via email: scd239@gmail.com" +
            "\n\nVersion: 0.20.2" +
            "\n\nThank you for using DAT PAA SDK!" +
            "\n\nCopyright © 2026 DAT PAA SDK. All Rights Reserved."
            ,
            introStyle,
            GUILayout.Width(400)
        );
        GUILayout.FlexibleSpace();
        GUILayout.EndHorizontal();

        GUILayout.FlexibleSpace();

        // Nút "Đồng ý"
        GUILayout.BeginHorizontal();
        GUILayout.FlexibleSpace();

        if (GUILayout.Button("Awesome!", GUILayout.Width(120), GUILayout.Height(30)))
        {
            EditorPrefs.SetBool(PrefKey, true);
            Close();
        }

        GUILayout.FlexibleSpace();
        GUILayout.EndHorizontal();

        GUILayout.Space(20);
    }
}
}
