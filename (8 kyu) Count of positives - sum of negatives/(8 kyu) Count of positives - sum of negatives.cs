using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
    public static int[] CountPositivesSumNegatives(int[] input)
    {
        if (input == null || input.Length == 0)
        {
          return new int[0];
        }
      
        int[] res = {0,0};
      
        for (int i = 0; i < input.Length; i++)
        {
            if (input[i] > 0)
            {
                res[0] += 1;
            }
            else
            {
              res[1] += input[i];
            }
        }
      
        return res;
    }
}
