using System;
using System.Collections.Generic;

public class Kata
{
    public static int[] SquareOrSquareRoot(int[] numbers)
    {
        List<int> res = new List<int>();

        foreach (var num in numbers)
        {
            double squaredNumber = Math.Sqrt(num);
            if (unchecked(squaredNumber == (int)squaredNumber))
            {
                res.Add((int)squaredNumber);
            }
            else
            {
                res.Add((int)Math.Pow(num, 2));
            }
        }

        return res.ToArray(); ;
    }
}