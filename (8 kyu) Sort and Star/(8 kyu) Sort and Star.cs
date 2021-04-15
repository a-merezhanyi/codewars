using System;
using System.Collections.Generic;

public class Kata
{
  public static string TwoSort(string[] s)
  {
    Array.Sort(s, StringComparer.Ordinal);
    char[] str = s[0].ToCharArray();
    return String.Join("***", str);
  }  
}
