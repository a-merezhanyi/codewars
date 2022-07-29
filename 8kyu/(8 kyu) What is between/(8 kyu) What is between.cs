using System.Collections.Generic;

public static class Kata
{
  public static int[] Between(int a, int b)
  {
    var result = new List<int>();

    for (var i = a; i <= b; i++)
    {
        result.Add(i);
    }

    return result.ToArray();
  }
}
