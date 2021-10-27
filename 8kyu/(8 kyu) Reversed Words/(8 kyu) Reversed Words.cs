using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static string ReverseWords(string str)
  {
    string[] res = str.Split(' ');
    Array.Reverse(res);
    return string.Join(' ', res); ;
  }
}
