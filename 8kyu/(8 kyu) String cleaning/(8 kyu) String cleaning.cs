// 1 Simple solution
using System;
using System.Text;

public class Kata
{
  public static string StringClean(string s)
  {
    var res = new StringBuilder();
    for (int i = 0; i < s.Length; i++)
    {
      if (!char.IsDigit(s[i]))
      {
        res.Append(s[i]);
      }
    }
    return res.ToString();
  }
}

// 2 Optimized solution
using System;
using System.Linq;

public class Kata
{
    public static string StringClean(string s)
    {
        return new string(s.Where(c => !char.IsDigit(c)).ToArray());
    }
}

// 3 Clever solution
public class Kata
{
    public static string StringClean(string s)
    {
        return System.Text.RegularExpressions.Regex.Replace(s, "[0-9]", "");
    }
}
