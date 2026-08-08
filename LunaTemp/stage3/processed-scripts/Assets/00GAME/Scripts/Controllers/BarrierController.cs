using UnityEngine;
using DG.Tweening;

public class BarrierController : MonoBehaviour
{
    [SerializeField] public GameObject barrier;
    [SerializeField] private float openDuration = 0.15f;
    [SerializeField] private float holdOpenDuration = 1.5f;
    [SerializeField] private float closeDuration = 0.15f;
    [SerializeField] private float openAngleX = -90f;

    private Tween barrierTween;

    public void OpenBarrier()
    {
        Transform barrierTransform = GetBarrierTransform();
        if (barrierTransform == null)
        {
            return;
        }

        KillBarrierTween();

        Vector3 openEuler = barrierTransform.localEulerAngles;
        openEuler.x = openAngleX;

        Vector3 closedEuler = barrierTransform.localEulerAngles;
        closedEuler.x = 0f;

        Sequence sequence = DOTween.Sequence();
        sequence.Append(
            barrierTransform.DOLocalRotate(openEuler, openDuration)
                .SetEase(Ease.OutQuad));
        sequence.AppendInterval(holdOpenDuration);
        sequence.Append(
            barrierTransform.DOLocalRotate(closedEuler, closeDuration)
                .SetEase(Ease.InOutQuad));
        barrierTween = sequence;
    }

    private Transform GetBarrierTransform()
    {
        if (barrier != null)
        {
            return barrier.transform;
        }

        return transform;
    }

    private void KillBarrierTween()
    {
        if (barrierTween != null)
        {
            barrierTween.Kill();
            barrierTween = null;
        }
    }

    private void OnDisable()
    {
        KillBarrierTween();
    }
}
