using System;

public static class Kata
{
  public static string CountSheep(int n)
  {
    string res = "";
    
    for (int i = 1; i <= n; i++)
    {
      res += $"{i} sheep...";
    }
    
    return res;
  }
}
