using System;

public static class Kata
{
  public static string Solution(string str) 
  {
    char[] array = str.ToCharArray();
    Array.Reverse(array);
    return new string(array);
  }
}
