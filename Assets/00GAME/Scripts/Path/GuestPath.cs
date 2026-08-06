using UnityEngine;

/// <summary>
/// Quy dao don khach cua map hien tai. Gan len empty cha, keo cac waypoint Transform vao mang.
/// </summary>
public class GuestPath : MonoBehaviour
{
    [SerializeField] private Transform[] waypoints;

    public int GetWaypointCount()
    {
        if (waypoints == null)
        {
            return 0;
        }

        return waypoints.Length;
    }

    public bool HasWaypoints()
    {
        return GetWaypointCount() > 0;
    }

    public Vector3[] GetPositions()
    {
        if (!HasWaypoints())
        {
            return new Vector3[0];
        }

        Vector3[] positions = new Vector3[waypoints.Length];
        for (int i = 0; i < waypoints.Length; i++)
        {
            if (waypoints[i] != null)
            {
                positions[i] = waypoints[i].position;
            }
            else
            {
                positions[i] = Vector3.zero;
            }
        }

        return positions;
    }

#if UNITY_EDITOR
    private void OnDrawGizmos()
    {
        if (!HasWaypoints())
        {
            return;
        }

        Gizmos.color = Color.cyan;
        for (int i = 0; i < waypoints.Length; i++)
        {
            if (waypoints[i] == null)
            {
                continue;
            }

            Gizmos.DrawSphere(waypoints[i].position, 0.15f);
            if (i > 0 && waypoints[i - 1] != null)
            {
                Gizmos.DrawLine(waypoints[i - 1].position, waypoints[i].position);
            }
        }
    }
#endif
}
