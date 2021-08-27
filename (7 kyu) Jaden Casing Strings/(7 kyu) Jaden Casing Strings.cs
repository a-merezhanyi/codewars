// #1
using System;
using System.Linq;

public static class JadenCase
{
  public static string ToJadenCase(this string phrase)
  {
    return string.Join(" ", phrase.Split(' ').Select(str => char.ToUpper(str[0]) + str.Substring(1)));
  }
}

// #2
using System;
using System.Globalization;

public static class JadenCase
{
  public static string ToJadenCase(this string phrase)
  {
    TextInfo myTI = new CultureInfo("en-US", false).TextInfo;
    return myTI.ToTitleCase(phrase);
  }
}
