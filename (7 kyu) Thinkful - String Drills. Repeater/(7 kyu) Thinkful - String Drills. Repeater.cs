using System.Linq;

public class Kata
{
  public static string Repeater(string s, int n)
  {
    return string.Concat(Enumerable.Repeat(s, n));
  }
}
