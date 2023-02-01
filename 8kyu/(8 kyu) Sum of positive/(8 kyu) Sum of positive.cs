using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    int res = 0;
    foreach (int x in arr)
    {
      if (x > 0) res += x;
    }
    return res;
  }
}
