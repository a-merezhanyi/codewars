using System;

public static class Kata
{
  public static string GenerateShape(int n)
  {
    string[] res = new string[n];
    for (int i = 0; i < n; i++)
    {
      res[i] = new string('+', n);
    }
    return String.Join("\n", res);
  }
}
