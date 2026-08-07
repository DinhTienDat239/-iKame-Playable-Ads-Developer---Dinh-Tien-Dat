using System.Collections.Generic;
using UnityEngine;

public class CarLineManager : MonoBehaviour
{
    private List<CarController>[] columns;

    public void ResetLines(int columnCount)
    {
        columns = new List<CarController>[columnCount];
        for (int i = 0; i < columnCount; i++)
        {
            columns[i] = new List<CarController>();
        }
    }

    public void ClearLines()
    {
        if (columns == null)
        {
            return;
        }

        for (int i = 0; i < columns.Length; i++)
        {
            if (columns[i] != null)
            {
                columns[i].Clear();
            }
        }
    }

    public void RegisterCar(int columnIndex, CarController car)
    {
        if (columns == null || car == null)
        {
            return;
        }

        if (columnIndex < 0 || columnIndex >= columns.Length)
        {
            return;
        }

        columns[columnIndex].Add(car);
    }

    public void NotifyCarDeparted(CarController car)
    {
        if (car == null || columns == null)
        {
            return;
        }

        int columnIndex = FindColumnIndex(car);
        if (columnIndex < 0)
        {
            return;
        }

        columns[columnIndex].Remove(car);
        car.isFirstLine = false;
        AdvanceColumn(columnIndex);
    }

    private void AdvanceColumn(int columnIndex)
    {
        List<CarController> column = columns[columnIndex];
        if (column == null || column.Count == 0)
        {
            return;
        }

        SpawnManager spawnManager = GameManager.Instance.spawnManager;
        if (spawnManager == null)
        {
            return;
        }

        float posX = column[0].transform.position.x;
        float posY = column[0].transform.position.y;
        float posZ = spawnManager.GetFirstLineZ();

        for (int i = 0; i < column.Count; i++)
        {
            CarController car = column[i];
            if (car == null)
            {
                continue;
            }

            car.isFirstLine = i == 0;

            Vector3 target = new Vector3(posX, posY, posZ);
            car.MoveInQueue(target);

            if (i < column.Count - 1)
            {
                CarController nextCar = column[i + 1];
                if (nextCar != null)
                {
                    float gap = spawnManager.GetSafeDistanceForType(car.carType)
                        + spawnManager.GetSafeDistanceForType(nextCar.carType);
                    posZ = posZ - gap;
                }
            }
        }
    }

    private int FindColumnIndex(CarController car)
    {
        for (int i = 0; i < columns.Length; i++)
        {
            List<CarController> column = columns[i];
            if (column == null)
            {
                continue;
            }

            for (int j = 0; j < column.Count; j++)
            {
                if (column[j] == car)
                {
                    return i;
                }
            }
        }

        return -1;
    }
}
