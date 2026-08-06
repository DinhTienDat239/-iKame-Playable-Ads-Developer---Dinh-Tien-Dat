using System.Collections;
using System.Reflection;
using DAT.Core.Optimization.SCU;
using UnityEditor;
using UnityEngine;

namespace DAT.Editor
{
    [CustomEditor(typeof(SCUManager))]
    public class SCUManagerEditor : UnityEditor.Editor
    {
        private const BindingFlags PrivateInstanceFlags = BindingFlags.Instance | BindingFlags.NonPublic;

        private FieldInfo _updateField;
        private FieldInfo _lateField;
        private FieldInfo _fixedField;
        private FieldInfo _aliveCountField;

        private void OnEnable()
        {
            var type = typeof(SCUManager);
            _updateField = type.GetField("_update", PrivateInstanceFlags);
            _lateField = type.GetField("_late", PrivateInstanceFlags);
            _fixedField = type.GetField("_fixed", PrivateInstanceFlags);
            _aliveCountField = type.GetField("_aliveCount", PrivateInstanceFlags);
        }

        public override void OnInspectorGUI()
        {
            DrawDefaultInspector();
            EditorGUILayout.Space();
            EditorGUILayout.LabelField("SCU Runtime Monitor", EditorStyles.boldLabel);

            if (!Application.isPlaying)
            {
                EditorGUILayout.HelpBox("Enter Play Mode to view active update subscriptions.", MessageType.Info);
                return;
            }

            var manager = (SCUManager)target;

            int updateCount = GetListCount(_updateField, manager);
            int lateCount = GetListCount(_lateField, manager);
            int fixedCount = GetListCount(_fixedField, manager);
            int totalAlive = GetIntValue(_aliveCountField, manager);

            using (new EditorGUI.DisabledScope(true))
            {
                EditorGUILayout.IntField("Update Count", updateCount);
                EditorGUILayout.IntField("LateUpdate Count", lateCount);
                EditorGUILayout.IntField("FixedUpdate Count", fixedCount);
                EditorGUILayout.IntField("Total Alive Count", totalAlive);
            }
        }

        private void OnInspectorUpdate()
        {
            if (Application.isPlaying)
            {
                Repaint();
            }
        }

        private static int GetListCount(FieldInfo field, SCUManager manager)
        {
            if (field == null || manager == null)
            {
                return 0;
            }

            var collection = field.GetValue(manager) as ICollection;
            return collection != null ? collection.Count : 0;
        }

        private static int GetIntValue(FieldInfo field, SCUManager manager)
        {
            if (field == null || manager == null)
            {
                return 0;
            }

            object value = field.GetValue(manager);
            return value is int intValue ? intValue : 0;
        }
    }
}
