using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(SpawnManager))]
public class SpawnManagerEditor : Editor
{
    private SerializedProperty car4Prefab;
    private SerializedProperty car6Prefab;
    private SerializedProperty car10Prefab;
    private SerializedProperty columnCount;
    private SerializedProperty firstLineZ;
    private SerializedProperty columnSpacing;
    private SerializedProperty spawnY;
    private SerializedProperty carParent;
    private SerializedProperty safeDistanceCar4;
    private SerializedProperty safeDistanceCar6;
    private SerializedProperty safeDistanceCar10;
    private SerializedProperty column0;
    private SerializedProperty column1;
    private SerializedProperty column2;
    private SerializedProperty column3;
    private SerializedProperty column4;

    private SerializedProperty guestPrefab;
    private SerializedProperty guestParent;
    private SerializedProperty guestSpawnPosCount;
    private SerializedProperty guestSpacing;
    private SerializedProperty guestCurveRadius;
    private SerializedProperty guestSpawnPositions;
    private SerializedProperty guestColors0;
    private SerializedProperty guestColors1;
    private SerializedProperty guestColors2;
    private SerializedProperty guestColors3;

    private void OnEnable()
    {
        car4Prefab = serializedObject.FindProperty("car4Prefab");
        car6Prefab = serializedObject.FindProperty("car6Prefab");
        car10Prefab = serializedObject.FindProperty("car10Prefab");
        columnCount = serializedObject.FindProperty("columnCount");
        firstLineZ = serializedObject.FindProperty("firstLineZ");
        columnSpacing = serializedObject.FindProperty("columnSpacing");
        spawnY = serializedObject.FindProperty("spawnY");
        carParent = serializedObject.FindProperty("carParent");
        safeDistanceCar4 = serializedObject.FindProperty("safeDistanceCar4");
        safeDistanceCar6 = serializedObject.FindProperty("safeDistanceCar6");
        safeDistanceCar10 = serializedObject.FindProperty("safeDistanceCar10");
        column0 = serializedObject.FindProperty("column0");
        column1 = serializedObject.FindProperty("column1");
        column2 = serializedObject.FindProperty("column2");
        column3 = serializedObject.FindProperty("column3");
        column4 = serializedObject.FindProperty("column4");

        guestPrefab = serializedObject.FindProperty("guestPrefab");
        guestParent = serializedObject.FindProperty("guestParent");
        guestSpawnPosCount = serializedObject.FindProperty("guestSpawnPosCount");
        guestSpacing = serializedObject.FindProperty("guestSpacing");
        guestCurveRadius = serializedObject.FindProperty("guestCurveRadius");
        guestSpawnPositions = serializedObject.FindProperty("guestSpawnPositions");
        guestColors0 = serializedObject.FindProperty("guestColors0");
        guestColors1 = serializedObject.FindProperty("guestColors1");
        guestColors2 = serializedObject.FindProperty("guestColors2");
        guestColors3 = serializedObject.FindProperty("guestColors3");
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update();

        EditorGUILayout.LabelField("CAR SPAWNER", EditorStyles.boldLabel);
        EditorGUILayout.PropertyField(car4Prefab);
        EditorGUILayout.PropertyField(car6Prefab);
        EditorGUILayout.PropertyField(car10Prefab);

        EditorGUILayout.Space();
        EditorGUILayout.LabelField("CAR SPAWNER / Layout", EditorStyles.boldLabel);
        EditorGUILayout.PropertyField(columnCount);
        EditorGUILayout.PropertyField(firstLineZ);
        EditorGUILayout.PropertyField(columnSpacing);
        EditorGUILayout.PropertyField(spawnY);
        EditorGUILayout.PropertyField(carParent);

        EditorGUILayout.Space();
        EditorGUILayout.LabelField("CAR SPAWNER / Safe Distances", EditorStyles.boldLabel);
        EditorGUILayout.PropertyField(safeDistanceCar4);
        EditorGUILayout.PropertyField(safeDistanceCar6);
        EditorGUILayout.PropertyField(safeDistanceCar10);

        EditorGUILayout.Space();
        EditorGUILayout.LabelField("CAR SPAWNER / Columns", EditorStyles.boldLabel);
        int carCount = columnCount.intValue;
        if (carCount >= 1)
        {
            EditorGUILayout.PropertyField(column0, true);
        }

        if (carCount >= 2)
        {
            EditorGUILayout.PropertyField(column1, true);
        }

        if (carCount >= 3)
        {
            EditorGUILayout.PropertyField(column2, true);
        }

        if (carCount >= 4)
        {
            EditorGUILayout.PropertyField(column3, true);
        }

        if (carCount >= 5)
        {
            EditorGUILayout.PropertyField(column4, true);
        }

        EditorGUILayout.Space();
        EditorGUILayout.LabelField("GUEST SPAWNER", EditorStyles.boldLabel);
        EditorGUILayout.PropertyField(guestPrefab);
        EditorGUILayout.PropertyField(guestParent);

        EditorGUILayout.Space();
        EditorGUILayout.LabelField("GUEST SPAWNER / Layout", EditorStyles.boldLabel);
        EditorGUILayout.PropertyField(guestSpawnPosCount);
        EditorGUILayout.PropertyField(guestSpacing);
        EditorGUILayout.PropertyField(guestCurveRadius);
        EditorGUILayout.PropertyField(guestSpawnPositions, true);

        EditorGUILayout.Space();
        EditorGUILayout.LabelField("GUEST SPAWNER / Color Orders", EditorStyles.boldLabel);
        int guestCount = guestSpawnPosCount.intValue;
        if (guestCount >= 1)
        {
            EditorGUILayout.PropertyField(guestColors0, true);
        }

        if (guestCount >= 2)
        {
            EditorGUILayout.PropertyField(guestColors1, true);
        }

        if (guestCount >= 3)
        {
            EditorGUILayout.PropertyField(guestColors2, true);
        }

        if (guestCount >= 4)
        {
            EditorGUILayout.PropertyField(guestColors3, true);
        }

        serializedObject.ApplyModifiedProperties();
    }
}
