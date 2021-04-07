using System;

namespace Extensions
{
  public static class StringExt
  {
    public static string ToAlternatingCase (this string s)
    {
      String res = String.Empty;
      
      for (int i = 0; i < s.Length; i++)
      {
          if (s[i].ToString() == s[i].ToString().ToUpper())
          {
              res += s[i].ToString().ToLower();
          }
          else
          {
              res += s[i].ToString().ToUpper();
          }
      }
      
      return res;
    }
  }
}
