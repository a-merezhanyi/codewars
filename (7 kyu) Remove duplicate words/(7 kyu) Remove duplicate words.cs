using System;
using System.Linq;

public static class Kata
{
  public static string RemoveDuplicateWords(string s) {
    return String.Join(" ", s.Split(' ').Distinct());
  }
}
