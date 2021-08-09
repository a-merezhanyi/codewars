using System;

public static class Kata
{
  public static string ReverseWords(string str)
  {
    string[] words = str.Split(' ');
    string result = String.Empty;
    foreach(string w in words) {
      char[] array = w.ToCharArray();
      Array.Reverse(array);
      result = String.Concat(result, new string(array), " ");
    }
    return result.Trim();
  }
}
