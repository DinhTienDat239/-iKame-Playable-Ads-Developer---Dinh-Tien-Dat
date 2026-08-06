using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;

namespace DAT.Core.Motion
{
    public enum MoveMode
    {
        Linear,
        Curve,
        Noise
    }

    [AddComponentMenu("DAT SDK/Core/SequentialMover")]
    public class SequentialMover : MonoBehaviour
    {
        //TARGET SETTINGS
        [Tooltip("Danh sách các target mà mover sẽ di chuyển tuần tự qua")]
        public List<Transform> targets = new List<Transform>();

        [Tooltip("Bật bỏ qua arrival effects và wait time cho một số target cụ thể")]
        public bool enableSkipOnTargets = false;

        [Tooltip("Danh sách target sẽ bỏ qua arrival effects và waitDuration")]
        public Transform[] targetsSkip = new Transform[0];

        [Tooltip("Độ lệch vị trí so với target (x, y, z)")]
        public Vector3 offset = Vector3.zero;

        [Tooltip("Kiểu di chuyển: Linear hoặc Curve (Bezier)")]
        public MoveMode moveMode = MoveMode.Linear;

        [Tooltip("Thời gian di chuyển đến mỗi target")]
        public float moveDuration = 1f;

        [Tooltip("Thời gian đứng lại tại target trước khi đi tiếp")]
        public float waitDuration = 0.5f;

        [Tooltip("Độ cong nếu chọn chế độ Curve")]
        public float curveDepth = 30f;

        [Tooltip("Độ mạnh của noise khi chọn chế độ Noise")]
        [Range(0f, 100f)]
        public float noiseStrength = 15f;

        [Tooltip("Ease cho tween di chuyển")]
        public Ease ease = Ease.InOutQuad;

        [Tooltip("Có lặp lại sau khi đến target cuối không")]
        public bool loop = true;

        [Tooltip("Tự động bắt đầu khi bật GameObject")]
        public bool autoStartOnEnable = true;

        [Tooltip("Snap đến target đầu tiên ngay lập tức (bỏ qua tween)")]
        public bool snapToFirstTarget = false;

        [Tooltip("Áp dụng với vật thể UI")]
        public bool useAnchoredPosition = false;

        [Tooltip("Xoay nhẹ khi đến target")]
        public bool enableRotateOnArrival = false;

        [Tooltip("Góc xoay khi đến target")]
        public float rotationAngle = 15f;

        [Tooltip("Thời gian xoay")]
        public float rotationDuration = 0.3f;

        [Tooltip("Scale to nhẹ khi đến target")]
        public bool enablePulseInOnArrival = false;

        [Tooltip("Scale nhỏ rồi về lại khi đến target")]
        public bool enablePulseOutOnArrival = false;

        [Tooltip("Mức scale khi pulse")]
        public float pulseScale = 1.2f;

        [Tooltip("Thời gian thực hiện pulse")]
        public float pulseDuration = 0.25f;

        [Tooltip("Ease cho pulse")]
        public Ease pulseEase = Ease.OutBack;

        [Tooltip("Giữ hiệu ứng Arrival tại target chẵn, reset về gốc tại target lẻ")]
        public bool holdArrivalEffects = false;

        //EVENTS
        public UnityEvent<int> OnTargetReached;
        public UnityEvent OnLoopComplete;

        private int _targetIndex = 0;
        private Coroutine _moveRoutine;
        private bool _isMoving = false;
        private Vector3 _originalScale;
        private Quaternion _originalRotation;

        void OnEnable()
        {
            _originalScale = transform.localScale;
            _originalRotation = transform.rotation;

            if (autoStartOnEnable)
            {
                StartMoving(true);
            }
        }

        void OnDisable()
        {
            StopMoving();
        }

        public void StartMoving(bool resetIndex = true)
        {
            if (targets == null || targets.Count == 0) return;

            if (_moveRoutine != null) StopCoroutine(_moveRoutine);
            if (resetIndex) _targetIndex = 0;
            _moveRoutine = StartCoroutine(MoveRoutine());
        }

        public void StopMoving()
        {
            _isMoving = false;
            DOTween.Kill(transform);
            if (_moveRoutine != null) StopCoroutine(_moveRoutine);
        }

        private IEnumerator MoveRoutine()
        {
            _isMoving = true;

            while (_isMoving)
            {
                Transform currentTarget = targets[_targetIndex];
                bool skipCurrentTarget = ShouldSkipTarget(currentTarget);

                if (moveMode == MoveMode.Linear)
                {
                    yield return MoveLinear(currentTarget);
                }
                else
                {
                    if (moveMode == MoveMode.Curve)
                    {
                        yield return MoveCurve(currentTarget);
                    }
                    else
                    {
                        yield return MoveNoise(currentTarget);
                    }
                }

                if (!skipCurrentTarget && holdArrivalEffects)
                {
                    if (_targetIndex % 2 == 0)
                        yield return PlayArrivalEffects();
                    else
                        yield return ResetArrivalEffects();
                }
                else if (!skipCurrentTarget)
                {
                    yield return PlayArrivalEffects();
                }

                OnTargetReached?.Invoke(_targetIndex);
                _targetIndex++;

                if (!skipCurrentTarget && waitDuration > 0f)
                {
                    yield return new WaitForSeconds(waitDuration);
                }

                if (_targetIndex >= targets.Count)
                {
                    OnLoopComplete?.Invoke();
                    if (loop)
                    {
                        _targetIndex = 0;
                    }
                    else
                    {
                        _isMoving = false;
                        yield break;
                    }
                }
            }
        }

        private bool ShouldSkipTarget(Transform target)
        {
            if (!enableSkipOnTargets || target == null || targetsSkip == null)
                return false;

            for (int i = 0; i < targetsSkip.Length; i++)
            {
                if (targetsSkip[i] == target)
                    return true;
            }

            return false;
        }

        private IEnumerator MoveLinear(Transform currentTarget)
        {
            bool completed = false;
            float durationThisStep = (_targetIndex == 0 && snapToFirstTarget) ? 0f : moveDuration;

            if (useAnchoredPosition)
            {
                RectTransform moverRect = transform as RectTransform;
                RectTransform targetRect = currentTarget as RectTransform;

                if (moverRect != null && targetRect != null)
                {
                    Vector2 targetPos = targetRect.anchoredPosition + (Vector2)offset;
                    moverRect.DOAnchorPos(targetPos, durationThisStep)
                             .SetEase(ease)
                             .OnComplete(() => completed = true);
                }
                else
                {
                    Debug.LogWarning("[SequentialMover] Cannot move in anchored mode: RectTransform missing.");
                    completed = true;
                }
            }
            else
            {
                Vector3 targetPos = currentTarget.position + offset;
                transform.DOMove(targetPos, durationThisStep)
                         .SetEase(ease)
                         .OnComplete(() => completed = true);
            }

            yield return new WaitUntil(() => completed);
        }

        private IEnumerator MoveNoise(Transform currentTarget)
        {
            bool completed = false;
            float durationThisStep = (_targetIndex == 0 && snapToFirstTarget) ? 0f : moveDuration;
            float seedX = Random.value * 1000f;
            float seedY = Random.value * 1000f;

            if (useAnchoredPosition)
            {
                RectTransform moverRect = transform as RectTransform;
                RectTransform targetRect = currentTarget as RectTransform;

                if (moverRect != null && targetRect != null)
                {
                    Vector2 startPos = moverRect.anchoredPosition;
                    Vector2 targetPos = targetRect.anchoredPosition + (Vector2)offset;
                    DOTween.To(() => 0f, progress =>
                    {
                        moverRect.anchoredPosition = GetNoisyPosition(startPos, targetPos, progress, seedX, seedY);
                    }, 1f, durationThisStep)
                    .SetEase(ease)
                    .SetUpdate(true)
                    .OnComplete(() =>
                    {
                        moverRect.anchoredPosition = targetPos;
                        completed = true;
                    });
                }
                else
                {
                    Debug.LogWarning("[SequentialMover] Noise (UI) failed: Missing RectTransform.");
                    completed = true;
                }
            }
            else
            {
                Vector3 startPos = transform.position;
                Vector3 targetPos = currentTarget.position + offset;
                DOTween.To(() => 0f, progress =>
                {
                    transform.position = GetNoisyPosition(startPos, targetPos, progress, seedX, seedY);
                }, 1f, durationThisStep)
                .SetEase(ease)
                .SetUpdate(true)
                .OnComplete(() =>
                {
                    transform.position = targetPos;
                    completed = true;
                });
            }

            yield return new WaitUntil(() => completed);
        }

        private Vector2 GetNoisyPosition(Vector2 startPos, Vector2 targetPos, float progress, float seedX, float seedY)
        {
            Vector2 basePos = Vector2.LerpUnclamped(startPos, targetPos, progress);
            return basePos + GetNoiseOffset(progress, seedX, seedY);
        }

        private Vector3 GetNoisyPosition(Vector3 startPos, Vector3 targetPos, float progress, float seedX, float seedY)
        {
            Vector3 basePos = Vector3.LerpUnclamped(startPos, targetPos, progress);
            Vector2 noise = GetNoiseOffset(progress, seedX, seedY);
            return basePos + new Vector3(noise.x, noise.y, 0f);
        }

        private Vector2 GetNoiseOffset(float progress, float seedX, float seedY)
        {
            float fade = Mathf.Sin(progress * Mathf.PI);
            float noiseX = Mathf.PerlinNoise(seedX, progress * 6f) * 2f - 1f;
            float noiseY = Mathf.PerlinNoise(seedY, progress * 6f) * 2f - 1f;
            return new Vector2(noiseX, noiseY) * noiseStrength * fade;
        }

        private IEnumerator MoveCurve(Transform currentTarget)
        {
            Transform lastTarget = _targetIndex == 0 ? targets[targets.Count - 1] : targets[_targetIndex - 1];
            bool completed = false;
            float durationThisStep = (_targetIndex == 0 && snapToFirstTarget) ? 0f : moveDuration;

            if (useAnchoredPosition)
            {
                RectTransform moverRect = transform as RectTransform;
                RectTransform rectA = lastTarget as RectTransform;
                RectTransform rectB = currentTarget as RectTransform;

                if (moverRect != null && rectA != null && rectB != null)
                {
                    Vector2 posA = rectA.anchoredPosition;
                    Vector2 posB = rectB.anchoredPosition;
                    Vector2 controlPoint = (posA + posB) / 2f;
                    controlPoint.y -= curveDepth;

                    float t = 0f;

                    DOTween.To(() => 0f, val =>
                    {
                        t = val;
                        float oneMinusT = 1f - t;
                        Vector2 curvedPos =
                            oneMinusT * oneMinusT * (posA + (Vector2)offset) +
                            2f * oneMinusT * t * controlPoint +
                            t * t * (posB + (Vector2)offset);

                        moverRect.anchoredPosition = curvedPos;
                    }, 1f, durationThisStep)
                    .SetEase(ease)
                    .SetUpdate(true)
                    .OnComplete(() => completed = true);
                }
                else
                {
                    Debug.LogWarning("[SequentialMover] Curve (UI) failed: Missing RectTransform.");
                    completed = true;
                }
            }
            else
            {
                Vector3 posA = lastTarget.position;
                Vector3 posB = currentTarget.position;
                Vector3 controlPoint = (posA + posB) / 2f;
                controlPoint.y -= curveDepth;

                float t = 0f;

                DOTween.To(() => 0f, val =>
                {
                    t = val;
                    float oneMinusT = 1f - t;
                    Vector3 curvedPos =
                        oneMinusT * oneMinusT * (posA + offset) +
                        2f * oneMinusT * t * controlPoint +
                        t * t * (posB + offset);

                    transform.position = curvedPos;
                }, 1f, durationThisStep)
                .SetEase(ease)
                .SetUpdate(true)
                .OnComplete(() => completed = true);
            }

            yield return new WaitUntil(() => completed);
        }

        private IEnumerator PlayArrivalEffects()
        {
            List<Tween> effects = new List<Tween>();

            if (holdArrivalEffects)
            {
                // --- HOLD MODE ---
                if (enableRotateOnArrival)
                {
                    effects.Add(transform.DORotate(new Vector3(0, 0, rotationAngle), rotationDuration)
                                         .SetEase(Ease.InOutQuad)
                                         .SetRelative()
                                         .SetUpdate(true));
                }

                if (enablePulseInOnArrival)
                {
                    effects.Add(transform.DOScale(Vector3.one * pulseScale, pulseDuration)
                                         .SetEase(pulseEase)
                                         .SetUpdate(true));
                }

                if (enablePulseOutOnArrival)
                {
                    effects.Add(transform.DOScale(Vector3.one * (1f / pulseScale), pulseDuration)
                                         .SetEase(pulseEase)
                                         .SetUpdate(true));
                }

                if (effects.Count > 0)
                    yield return DOTween.Sequence().AppendInterval(pulseDuration);
            }
            else
            {
                // --- CLASSIC MODE ---
                if (enableRotateOnArrival)
                {
                    transform.DORotate(new Vector3(0, 0, rotationAngle), rotationDuration)
                             .SetEase(Ease.InOutQuad)
                             .SetLoops(2, LoopType.Yoyo)
                             .SetRelative()
                             .SetUpdate(true);
                }

                if (enablePulseInOnArrival)
                {
                    effects.Add(transform.DOScale(Vector3.one * pulseScale, pulseDuration / 2f)
                                         .SetEase(pulseEase)
                                         .SetLoops(2, LoopType.Yoyo)
                                         .SetUpdate(true));
                }

                if (enablePulseOutOnArrival)
                {
                    effects.Add(transform.DOScale(Vector3.one * (1f / pulseScale), pulseDuration / 2f)
                                         .SetEase(pulseEase)
                                         .SetLoops(2, LoopType.Yoyo)
                                         .SetUpdate(true));
                }

                if (effects.Count > 0)
                    yield return DOTween.Sequence().AppendInterval(pulseDuration);
            }
        }


        private IEnumerator ResetArrivalEffects()
        {
            List<Tween> resetTweens = new List<Tween>();

            if (enableRotateOnArrival)
            {
                resetTweens.Add(transform.DORotateQuaternion(_originalRotation, rotationDuration)
                                         .SetEase(Ease.InOutQuad)
                                         .SetUpdate(true));
            }

            if (enablePulseInOnArrival || enablePulseOutOnArrival)
            {
                resetTweens.Add(transform.DOScale(_originalScale, pulseDuration)
                                         .SetEase(pulseEase)
                                         .SetUpdate(true));
            }

            if (resetTweens.Count > 0)
                yield return DOTween.Sequence().AppendInterval(pulseDuration);
        }
    }
}
