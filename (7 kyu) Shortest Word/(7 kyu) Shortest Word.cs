// #1 Plain Solution
public class Kata
{
  public static int FindShort(string s)
  {
    string[] words = s.Split(' ');
    int min = s.Length;
    foreach (string word in words)
    {
        min = word.Length < min ? word.Length : min;
    }
    return min;
  }
}

// #2 Optimized solution
using System.Linq;

public class Kata
{
  public static int FindShort(string s)
  {
    return s.Split(' ').Min(x => x.Length);
  }
}
