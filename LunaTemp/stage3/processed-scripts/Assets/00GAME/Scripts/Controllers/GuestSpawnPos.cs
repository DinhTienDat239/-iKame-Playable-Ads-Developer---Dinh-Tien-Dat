using UnityEngine;

public class GuestSpawnPos : MonoBehaviour
{
    [SerializeField] public Enums.GuestQueueType queueType = Enums.GuestQueueType.StraightUp;

#if UNITY_EDITOR
    private void OnDrawGizmos()
    {
        Gizmos.color = Color.yellow;
        Gizmos.DrawSphere(transform.position, 0.12f);
        Gizmos.DrawLine(transform.position, transform.position + transform.forward * 0.5f);
    }
#endif
}
