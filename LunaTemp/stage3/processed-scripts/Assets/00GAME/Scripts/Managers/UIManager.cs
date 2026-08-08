using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    [Header("References")]
    [SerializeField] public Image winScreen;
    [SerializeField] public Image winIcon;
    [SerializeField] public TextMeshProUGUI winTxt;
    [SerializeField] public Image winCTABtn;
    [SerializeField] public Image loseScreen;
    [SerializeField] public Image loseIcon;
    [SerializeField] public TextMeshProUGUI loseTxt;
    [SerializeField] public Image loseCTABtn;
    [SerializeField] public Image carMovingDisplay;
    [SerializeField] public TextMeshProUGUI carMovingTxt;
    [SerializeField] public Image WarnBox;
    [SerializeField] public TextMeshProUGUI WarnTxt;
    [SerializeField] public TextMeshProUGUI tutorialTxt;

    [Header("End Screen")]
    [SerializeField] private float screenFadeDuration = 0.2f;
    [SerializeField] private float screenFadeAlpha = 200f / 255f;
    [SerializeField] private float popupItemDuration = 0.22f;
    [SerializeField] private float popupItemDelay = 0.08f;
    [SerializeField] private float ctaPulseScale = 1.08f;
    [SerializeField] private float ctaPulseHalfDuration = 0.3f;

    [Header("Car Moving Display")]
    [SerializeField] private float carMovingPopupScale = 1.05f;
    [SerializeField] private float carMovingPopupInDuration = 0.1f;
    [SerializeField] private float carMovingPopupOutDuration = 0.12f;
    [SerializeField] private float warnTextRedDuration = 0.1f;
    [SerializeField] private float warnShakeAngle = 10f;
    [SerializeField] private float warnShakeDuration = 0.35f;

    [Header("Warn Box")]
    [SerializeField] private float warnBoxSlideOffset = 40f;
    [SerializeField] private float warnBoxShowDuration = 0.25f;
    [SerializeField] private float warnBoxHideDuration = 0.25f;
    [SerializeField] private float warnBoxTotalDuration = 1f;

    private Tween endScreenTween;
    private Tween ctaPulseTween;
    private Tween carDisplayTween;
    private Tween warnBoxTween;

    private Color carMovingTxtDefaultColor;
    private Vector3 carMovingDisplayDefaultScale;
    private Vector3 carMovingDisplayDefaultEuler;
    private Vector3 winCtaDefaultScale;
    private Vector3 loseCtaDefaultScale;
    private float warnBoxDefaultAlpha;
    private float warnTxtDefaultAlpha;
    private Vector2 warnBoxDefaultAnchoredPos;

    private Transform carMovingDisplayTransform;
    private RectTransform warnBoxRect;
    private bool isWarnBoxShowing;

    private void Awake()
    {
        CacheDefaults();
        ResetEndScreen(winScreen, winIcon, winTxt, winCTABtn);
        ResetEndScreen(loseScreen, loseIcon, loseTxt, loseCTABtn);
        ResetWarnBox();
    }

    private void Start()
    {
        UpdateCarMovingDisplay();
    }

    public void ShowWinScreen()
    {
        ShowEndScreen(winScreen, winIcon, winTxt, winCTABtn, winCtaDefaultScale);
    }

    public void ShowLoseScreen()
    {
        ShowEndScreen(loseScreen, loseIcon, loseTxt, loseCTABtn, loseCtaDefaultScale);
    }

    public void UpdateCarMovingDisplay()
    {
        if (carMovingTxt == null)
        {
            return;
        }

        GameManager gameManager = GameManager.Instance;
        int movingCount = 0;
        int movingLimit = 0;
        if (gameManager != null)
        {
            movingCount = gameManager.movingCarCount;
            movingLimit = gameManager.movingCarLimit;
        }

        carMovingTxt.text = movingCount + "/" + movingLimit;
        carMovingTxt.color = carMovingTxtDefaultColor;

        if (carMovingDisplayTransform == null)
        {
            return;
        }

        KillCarDisplayTween();
        carMovingDisplayTransform.localScale = carMovingDisplayDefaultScale;
        carMovingDisplayTransform.localEulerAngles = carMovingDisplayDefaultEuler;

        Vector3 popScale = carMovingDisplayDefaultScale * carMovingPopupScale;
        carDisplayTween = DOTween.Sequence()
            .Append(carMovingDisplayTransform.DOScale(popScale, carMovingPopupInDuration).SetEase(Ease.OutQuad))
            .Append(carMovingDisplayTransform.DOScale(carMovingDisplayDefaultScale, carMovingPopupOutDuration).SetEase(Ease.InOutQuad));
    }

    public void WarnMaxCarMoving()
    {
        ShowWarnBox();
        KillCarDisplayTween();

        if (carMovingTxt != null)
        {
            carMovingTxt.DOColor(Color.red, warnTextRedDuration).SetEase(Ease.OutQuad);
        }

        if (carMovingDisplayTransform == null)
        {
            return;
        }

        carMovingDisplayTransform.localEulerAngles = carMovingDisplayDefaultEuler;

        float stepDuration = warnShakeDuration * 0.25f;
        Vector3 shakeRight = carMovingDisplayDefaultEuler + new Vector3(0f, 0f, warnShakeAngle);
        Vector3 shakeLeft = carMovingDisplayDefaultEuler + new Vector3(0f, 0f, -warnShakeAngle);

        carDisplayTween = DOTween.Sequence()
            .Append(carMovingDisplayTransform.DOLocalRotate(shakeRight, stepDuration).SetEase(Ease.InOutSine))
            .Append(carMovingDisplayTransform.DOLocalRotate(shakeLeft, stepDuration * 2f).SetEase(Ease.InOutSine))
            .Append(carMovingDisplayTransform.DOLocalRotate(carMovingDisplayDefaultEuler, stepDuration).SetEase(Ease.InOutSine));
    }

    private void ShowWarnBox()
    {
        if (isWarnBoxShowing || WarnBox == null || warnBoxRect == null)
        {
            return;
        }

        isWarnBoxShowing = true;
        KillWarnBoxTween();

        WarnBox.gameObject.SetActive(true);
        if (WarnTxt != null)
        {
            WarnTxt.gameObject.SetActive(true);
        }

        SetImageAlpha(WarnBox, 0f);
        if (WarnTxt != null)
        {
            WarnTxt.alpha = 0f;
        }

        Vector2 startPos = warnBoxDefaultAnchoredPos;
        startPos.y = startPos.y - warnBoxSlideOffset;
        warnBoxRect.anchoredPosition = startPos;

        Vector2 hidePos = warnBoxDefaultAnchoredPos;
        hidePos.y = hidePos.y + warnBoxSlideOffset;

        float holdDuration = warnBoxTotalDuration - warnBoxShowDuration - warnBoxHideDuration;
        if (holdDuration < 0f)
        {
            holdDuration = 0f;
        }

        Sequence sequence = DOTween.Sequence();
        sequence.Append(warnBoxRect.DOAnchorPos(warnBoxDefaultAnchoredPos, warnBoxShowDuration).SetEase(Ease.OutQuad));
        sequence.Join(WarnBox.DOFade(warnBoxDefaultAlpha, warnBoxShowDuration).SetEase(Ease.OutQuad));
        if (WarnTxt != null)
        {
            sequence.Join(WarnTxt.DOFade(warnTxtDefaultAlpha, warnBoxShowDuration).SetEase(Ease.OutQuad));
        }

        sequence.AppendInterval(holdDuration);

        sequence.Append(warnBoxRect.DOAnchorPos(hidePos, warnBoxHideDuration).SetEase(Ease.InQuad));
        sequence.Join(WarnBox.DOFade(0f, warnBoxHideDuration).SetEase(Ease.InQuad));
        if (WarnTxt != null)
        {
            sequence.Join(WarnTxt.DOFade(0f, warnBoxHideDuration).SetEase(Ease.InQuad));
        }

        sequence.OnComplete(OnWarnBoxSequenceComplete);
        warnBoxTween = sequence;
    }

    private void OnWarnBoxSequenceComplete()
    {
        isWarnBoxShowing = false;
        ResetWarnBox();
    }

    private void ResetWarnBox()
    {
        KillWarnBoxTween();

        if (WarnBox != null)
        {
            SetImageAlpha(WarnBox, 0f);
            WarnBox.gameObject.SetActive(false);

            if (warnBoxRect != null)
            {
                warnBoxRect.anchoredPosition = warnBoxDefaultAnchoredPos;
            }
        }

        if (WarnTxt != null)
        {
            WarnTxt.alpha = 0f;
            WarnTxt.gameObject.SetActive(false);
        }
    }

    private void KillWarnBoxTween()
    {
        if (warnBoxTween != null)
        {
            warnBoxTween.Kill();
            warnBoxTween = null;
        }

        if (warnBoxRect != null)
        {
            warnBoxRect.DOKill();
        }

        if (WarnBox != null)
        {
            WarnBox.DOKill();
        }

        if (WarnTxt != null)
        {
            WarnTxt.DOKill();
        }
    }

    private void ShowEndScreen(Image screen, Image icon, TextMeshProUGUI txt, Image ctaBtn, [Bridge.Ref] Vector3 ctaDefaultScale)
    {
        KillEndScreenTween();
        ResetEndScreenItems(icon, txt, ctaBtn);

        if (screen == null)
        {
            PlayEndScreenPopups(icon, txt, ctaBtn, ctaDefaultScale);
            return;
        }

        screen.gameObject.SetActive(true);
        SetImageAlpha(screen, 0f);

        endScreenTween = DOTween.Sequence()
            .Append(screen.DOFade(screenFadeAlpha, screenFadeDuration).SetEase(Ease.OutQuad))
            .AppendCallback(() =>
            {
                PlayEndScreenPopups(icon, txt, ctaBtn, ctaDefaultScale);
            });
    }

    private void PlayEndScreenPopups(Image icon, TextMeshProUGUI txt, Image ctaBtn, [Bridge.Ref] Vector3 ctaDefaultScale)
    {
        Sequence sequence = DOTween.Sequence();
        bool isFirstItem = true;

        AppendPopupItem(sequence, icon, ref isFirstItem);
        AppendPopupItem(sequence, txt, ref isFirstItem);
        AppendPopupItem(sequence, ctaBtn, ref isFirstItem);

        sequence.OnComplete(() =>
        {
            StartCtaPulse(ctaBtn, ctaDefaultScale);
        });

        endScreenTween = sequence;
    }

    private void AppendPopupItem(Sequence sequence, Component item, ref bool isFirstItem)
    {
        if (item == null)
        {
            return;
        }

        item.gameObject.SetActive(true);
        Transform itemTransform = item.transform;
        itemTransform.localScale = Vector3.zero;

        Image image = item as Image;
        if (image != null)
        {
            SetImageAlpha(image, 1f);
        }

        if (!isFirstItem)
        {
            sequence.AppendInterval(popupItemDelay);
        }

        isFirstItem = false;
        sequence.Append(itemTransform.DOScale(1f, popupItemDuration).SetEase(Ease.OutBack));
    }

    private void StartCtaPulse(Image ctaBtn, [Bridge.Ref] Vector3 defaultScale)
    {
        StopCtaPulse();

        if (ctaBtn == null)
        {
            return;
        }

        Transform ctaTransform = ctaBtn.transform;
        ctaTransform.localScale = defaultScale;

        ctaPulseTween = ctaTransform
            .DOScale(defaultScale * ctaPulseScale, ctaPulseHalfDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo);
    }

    private void ResetEndScreen(Image screen, Image icon, TextMeshProUGUI txt, Image ctaBtn)
    {
        if (screen != null)
        {
            SetImageAlpha(screen, 0f);
            screen.gameObject.SetActive(false);
        }

        ResetEndScreenItems(icon, txt, ctaBtn);
    }

    private void ResetEndScreenItems(Image icon, TextMeshProUGUI txt, Image ctaBtn)
    {
        ResetPopupItem(icon);
        ResetPopupItem(txt);
        ResetPopupItem(ctaBtn);

        if (ctaBtn == winCTABtn)
        {
            StopCtaPulse();
            if (winCTABtn != null)
            {
                winCTABtn.transform.localScale = winCtaDefaultScale;
            }
        }
        else if (ctaBtn == loseCTABtn)
        {
            StopCtaPulse();
            if (loseCTABtn != null)
            {
                loseCTABtn.transform.localScale = loseCtaDefaultScale;
            }
        }
    }

    private void ResetPopupItem(Component item)
    {
        if (item == null)
        {
            return;
        }

        item.transform.localScale = Vector3.zero;
        item.gameObject.SetActive(false);
    }

    private void SetImageAlpha(Image image, float alpha)
    {
        Color color = image.color;
        color.a = alpha;
        image.color = color;
    }

    private void CacheDefaults()
    {
        if (carMovingTxt != null)
        {
            carMovingTxtDefaultColor = carMovingTxt.color;
        }

        if (carMovingDisplay != null)
        {
            carMovingDisplayTransform = carMovingDisplay.transform;
            carMovingDisplayDefaultScale = carMovingDisplayTransform.localScale;
            carMovingDisplayDefaultEuler = carMovingDisplayTransform.localEulerAngles;
        }

        if (winCTABtn != null)
        {
            winCtaDefaultScale = winCTABtn.transform.localScale;
        }

        if (loseCTABtn != null)
        {
            loseCtaDefaultScale = loseCTABtn.transform.localScale;
        }

        if (WarnBox != null)
        {
            warnBoxRect = WarnBox.rectTransform;
            warnBoxDefaultAnchoredPos = warnBoxRect.anchoredPosition;
            warnBoxDefaultAlpha = WarnBox.color.a;
        }

        if (WarnTxt != null)
        {
            warnTxtDefaultAlpha = WarnTxt.alpha;
        }
    }

    private void KillEndScreenTween()
    {
        if (endScreenTween != null)
        {
            endScreenTween.Kill();
            endScreenTween = null;
        }

        StopCtaPulse();
    }

    private void StopCtaPulse()
    {
        if (ctaPulseTween != null)
        {
            ctaPulseTween.Kill();
            ctaPulseTween = null;
        }
    }

    private void KillCarDisplayTween()
    {
        if (carDisplayTween != null)
        {
            carDisplayTween.Kill();
            carDisplayTween = null;
        }

        if (carMovingDisplayTransform != null)
        {
            carMovingDisplayTransform.DOKill();
        }

        if (carMovingTxt != null)
        {
            carMovingTxt.DOKill();
        }
    }

    private void OnDisable()
    {
        KillEndScreenTween();
        KillCarDisplayTween();
        KillWarnBoxTween();
        isWarnBoxShowing = false;
    }
}
