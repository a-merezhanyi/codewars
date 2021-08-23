using System;
using System.Linq;

public static class JadenCase
{
  public static string ToJadenCase(this string phrase)
  {
    return string.Join(" ", phrase.Split(' ').Select(str => char.ToUpper(str[0]) + str.Substring(1)));
  }
}
