using UnityEngine;
using DG.Tweening;
using DAT.Managers;

public class GuestController : MonoBehaviour
{
    [Header("Guest Properties")]
    [SerializeField] public Enums.GameColor guestColor;

    [Header("Movement")]
    [SerializeField] private float jumpPower = 0.8f;
    [SerializeField] private float jumpDuration = 0.1f;
    [SerializeField] private float queueMoveDuration = 0.15f;

    [Header("References")]
    [SerializeField] private SkinnedMeshRenderer meshRendererBody;
    [SerializeField] private Animator animator;

    public bool isOnCar;

    private Tween jumpTween;

    public void Init()
    {
        Material mat = GameManager.Instance.colorPalette.GetHumanMaterial(guestColor);
        meshRendererBody.sharedMaterial = mat;
    }

    public void SetQueueVisible(bool visible)
    {
        if (meshRendererBody != null)
        {
            meshRendererBody.gameObject.SetActive(visible);
        }

        SetAnimatorActive(visible);
    }

    private void SetAnimatorActive(bool active)
    {
        if (animator != null)
        {
            animator.enabled = active;
        }
    }

    public void JumpToSeat(Transform seat, TweenCallback onComplete)
    {
        if (seat == null)
        {
            if (onComplete != null)
            {
                onComplete();
            }
            return;
        }

        jumpCompleteCallback = onComplete;
        pendingSeat = seat;
        isOnCar = true;
        SetAnimatorActive(true);

        if (jumpTween != null)
        {
            jumpTween.Kill();
        }

        jumpTween = transform
            .DOJump(seat.position, jumpPower, 1, jumpDuration)
            .SetEase(Ease.OutQuad)
            .OnComplete(OnJumpToSeatComplete);
        
        DOTween.Sequence()
            .AppendInterval(0.03f)
            .AppendCallback(() => AudioManager.Instance.PlaySFX(GameManager.Instance.carHopInSound));
    }

    private Transform pendingSeat;
    private TweenCallback jumpCompleteCallback;

    private void OnJumpToSeatComplete()
    {
        if (pendingSeat != null)
        {
            transform.SetParent(pendingSeat);
            transform.localPosition = Vector3.zero;
            transform.localRotation = Quaternion.identity;
            transform.localScale = new Vector3(1.4f, 1.4f, 1.4f);
        }
        SetSit(true);

        if (jumpCompleteCallback != null)
        {
            jumpCompleteCallback();
            jumpCompleteCallback = null;
        }
    }

    public void SetSit(bool sit)
    {
        if (animator != null)
        {
            animator.SetBool("Sit", sit);
        }
    }

    public void MoveToQueueSlot([Bridge.Ref] Vector3 worldPos, [Bridge.Ref] Quaternion worldRotation)
    {
        if (isOnCar)
        {
            return;
        }

        if (jumpTween != null)
        {
            jumpTween.Kill();
        }

        Sequence sequence = DOTween.Sequence();
        sequence.Join(transform.DOMove(worldPos, queueMoveDuration).SetEase(Ease.OutQuad));
        sequence.Join(transform.DORotateQuaternion(worldRotation, queueMoveDuration).SetEase(Ease.OutQuad));
        jumpTween = sequence;
    }

    private void OnDisable()
    {
        if (jumpTween != null)
        {
            jumpTween.Kill();
        }
    }
}
