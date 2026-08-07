using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;
using DAT.Core.DesignPatterns;

namespace DAT.Core
{
    public enum Orientation
    {
        Portrait,
        Landscape
    }

    [System.Serializable]
    public struct AspectCameraValues
    {
        [Tooltip("Field of View cho camera Perspective")]
        public float fieldOfView;

        [Tooltip("Orthographic Size cho camera Orthographic")]
        public float orthographicSize;

        public AspectCameraValues(float fieldOfView, float orthographicSize)
        {
            this.fieldOfView = fieldOfView;
            this.orthographicSize = orthographicSize;
        }
    }

    [AddComponentMenu("DAT SDK/Core/ResponsiveManager")]
    [DisallowMultipleComponent]
    public class ResponsiveManager : Singleton<ResponsiveManager>
    {
        private static readonly float Aspect9x16 = 9f / 16f;
        private static readonly float Aspect9x18 = 9f / 18f;
        private static readonly float Aspect9x20 = 9f / 20f;
        private static readonly float Aspect9x21 = 9f / 21f;

        [Header("Current Orientation (ReadOnly)")]
        [SerializeField] private Orientation currentOrientation = Orientation.Portrait;
        public Orientation CurrentOrientation => currentOrientation;

        [Header("Events")]
        public UnityEvent OnPortrait;
        public UnityEvent OnLandscape;
        public UnityEvent<Orientation> OnOrientationChanged;

        [Header("Auto Toggle Objects")]
        [Tooltip("Những GameObject này sẽ được bật khi ở chế độ Portrait và tắt khi ở Landscape")]
        [SerializeField] private GameObject[] portraitOnlyObjects = new GameObject[0];

        [Tooltip("Những GameObject này sẽ được bật khi ở chế độ Landscape và tắt khi ở Portrait")]
        [SerializeField] private GameObject[] landscapeOnlyObjects = new GameObject[0];

        [Header("Canvas Scaler (Optional)")]
        [Tooltip("Nếu được set, CanvasScaler sẽ đổi resolution theo hướng màn hình")]
        [SerializeField] private CanvasScaler targetCanvasScaler;
        [Tooltip("Tự động tìm CanvasScaler gần nhất nếu để trống")]
        [SerializeField] private bool autoFindCanvasScaler = true;

        [Tooltip("Reference Resolution khi Portrait (width x height)")]
        [SerializeField] private Vector2 portraitResolution = new Vector2(1080, 1920);

        [Tooltip("Reference Resolution khi Landscape (width x height)")]
        [SerializeField] private Vector2 landscapeResolution = new Vector2(1920, 1080);

        [Header("Camera FOV / Size by Aspect")]
        [Tooltip("Bật chỉnh FOV (perspective) và Size (orthographic) theo tỉ lệ màn hình")]
        [SerializeField] private bool adjustCamerasByAspect = false;

        [Tooltip("Danh sách camera sẽ được cập nhật theo các mốc tỉ lệ")]
        [SerializeField] private Camera[] targetCameras = new Camera[0];

        [Tooltip("Giá trị tại mốc 9:16 (compact aspect = 0.5625)")]
        [SerializeField] private AspectCameraValues values9x16 = new AspectCameraValues(60f, 5f);

        [Tooltip("Giá trị tại mốc 9:18 (compact aspect = 0.5)")]
        [SerializeField] private AspectCameraValues values9x18 = new AspectCameraValues(60f, 5f);

        [Tooltip("Giá trị tại mốc 9:20 (compact aspect = 0.45)")]
        [SerializeField] private AspectCameraValues values9x20 = new AspectCameraValues(60f, 5f);

        [Tooltip("Giá trị tại mốc 9:21 (compact aspect ≈ 0.4286)")]
        [SerializeField] private AspectCameraValues values9x21 = new AspectCameraValues(60f, 5f);

        [Header("Detection Settings")]
        [Tooltip("Sử dụng Screen.orientation/DeviceOrientation nếu có, fallback về tỉ lệ màn hình")]
        [SerializeField] private bool useDeviceOrientation = false;
        [Tooltip("Ngưỡng thay đổi tỉ lệ để coi như đã đổi hướng")]
        [SerializeField] private float aspectChangeThreshold = 0.01f;

        private float lastAspectRatio = -1;

        void Start()
        {
            // Ensure singleton initialization happens early
            // (Awake() in base already sets persistence if enabled)
            if (targetCanvasScaler == null && autoFindCanvasScaler)
            {
                targetCanvasScaler = GetComponentInParent<CanvasScaler>();
            }
            EvaluateOrientation(forceInvoke: true);
        }

        protected override void Awake()
        {
            base.Awake();
        }

        void LateUpdate() // đảm bảo Canvas đã layout xong
        {
            EvaluateOrientation();
        }

        private void EvaluateOrientation(bool forceInvoke = false)
        {
            float aspect = (float)Screen.width / Screen.height;

            if (!forceInvoke && Mathf.Abs(aspect - lastAspectRatio) < aspectChangeThreshold)
                return;

            lastAspectRatio = aspect;

            // Camera theo tỉ lệ compact — cập nhật cả khi orientation không đổi
            UpdateCamerasByAspect();

            Orientation newOrientation = DetermineOrientation(aspect);

            if (newOrientation != currentOrientation || forceInvoke)
            {
                currentOrientation = newOrientation;

                ToggleObjectsByOrientation(currentOrientation);
                UpdateCanvasScaler(currentOrientation);

                OnOrientationChanged?.Invoke(currentOrientation);
                if (currentOrientation == Orientation.Landscape)
                    OnLandscape?.Invoke();
                else
                    OnPortrait?.Invoke();
            }
        }

        private Orientation DetermineOrientation(float aspect)
        {
            if (useDeviceOrientation)
            {
                // Try Screen.orientation first
                switch (Screen.orientation)
                {
                    case ScreenOrientation.LandscapeLeft:
                    case ScreenOrientation.LandscapeRight:
                        return Orientation.Landscape;
                    case ScreenOrientation.Portrait:
                    case ScreenOrientation.PortraitUpsideDown:
                        return Orientation.Portrait;
                }

                // Fallback to Input.deviceOrientation
                var dev = Input.deviceOrientation;
                if (dev == DeviceOrientation.LandscapeLeft || dev == DeviceOrientation.LandscapeRight)
                    return Orientation.Landscape;
                if (dev == DeviceOrientation.Portrait || dev == DeviceOrientation.PortraitUpsideDown)
                    return Orientation.Portrait;
            }

            // Fallback to aspect ratio
            return aspect >= 1f ? Orientation.Landscape : Orientation.Portrait;
        }

        private void ToggleObjectsByOrientation(Orientation orientation)
        {
            bool isPortrait = orientation == Orientation.Portrait;

            for (int i = 0; i < portraitOnlyObjects.Length; i++)
            {
                var obj = portraitOnlyObjects[i];
                if (obj != null && obj.activeSelf != isPortrait)
                    obj.SetActive(isPortrait);
            }

            for (int i = 0; i < landscapeOnlyObjects.Length; i++)
            {
                var obj = landscapeOnlyObjects[i];
                if (obj != null && obj.activeSelf != !isPortrait)
                    obj.SetActive(!isPortrait);
            }
        }

        private void UpdateCanvasScaler(Orientation orientation)
        {
            if (targetCanvasScaler == null) return;

            targetCanvasScaler.referenceResolution =
                orientation == Orientation.Landscape ? landscapeResolution : portraitResolution;
        }

        /// <summary>
        /// Tỉ lệ cạnh ngắn / cạnh dài — dùng chung cho Portrait và Landscape.
        /// </summary>
        private static float GetCompactAspect()
        {
            float w = Screen.width;
            float h = Screen.height;
            return w < h ? w / h : h / w;
        }

        private void UpdateCamerasByAspect()
        {
            if (!adjustCamerasByAspect || targetCameras == null || targetCameras.Length == 0)
                return;

            SampleCameraValues(GetCompactAspect(), out float fov, out float size);

            for (int i = 0; i < targetCameras.Length; i++)
            {
                Camera cam = targetCameras[i];
                if (cam == null) continue;

                if (cam.orthographic)
                    cam.orthographicSize = size;
                else
                    cam.fieldOfView = fov;
            }
        }

        /// <summary>
        /// Nội suy tuyến tính theo các mốc 9:21 → 9:20 → 9:18 → 9:16.
        /// Ngoài khoảng: clamp về mốc gần nhất.
        /// </summary>
        private void SampleCameraValues(float compactAspect, out float fieldOfView, out float orthographicSize)
        {
            // Mốc tăng dần: màn càng "vuông" thì aspect càng lớn
            if (compactAspect <= Aspect9x21)
            {
                fieldOfView = values9x21.fieldOfView;
                orthographicSize = values9x21.orthographicSize;
                return;
            }

            if (compactAspect >= Aspect9x16)
            {
                fieldOfView = values9x16.fieldOfView;
                orthographicSize = values9x16.orthographicSize;
                return;
            }

            if (compactAspect < Aspect9x20)
            {
                LerpCameraValues(Aspect9x21, values9x21, Aspect9x20, values9x20, compactAspect,
                    out fieldOfView, out orthographicSize);
                return;
            }

            if (compactAspect < Aspect9x18)
            {
                LerpCameraValues(Aspect9x20, values9x20, Aspect9x18, values9x18, compactAspect,
                    out fieldOfView, out orthographicSize);
                return;
            }

            LerpCameraValues(Aspect9x18, values9x18, Aspect9x16, values9x16, compactAspect,
                out fieldOfView, out orthographicSize);
        }

        private static void LerpCameraValues(
            float aspectA, [Bridge.Ref] AspectCameraValues valuesA,
            float aspectB, [Bridge.Ref] AspectCameraValues valuesB,
            float aspect,
            out float fieldOfView,
            out float orthographicSize)
        {
            float t = Mathf.InverseLerp(aspectA, aspectB, aspect);
            fieldOfView = Mathf.Lerp(valuesA.fieldOfView, valuesB.fieldOfView, t);
            orthographicSize = Mathf.Lerp(valuesA.orthographicSize, valuesB.orthographicSize, t);
        }

        /// <summary>
        /// Gọi thủ công khi cần cập nhật ngay (ví dụ thay đổi cấu hình trong runtime).
        /// </summary>
        public void ForceEvaluate()
        {
            EvaluateOrientation(forceInvoke: true);
        }
    }
}
