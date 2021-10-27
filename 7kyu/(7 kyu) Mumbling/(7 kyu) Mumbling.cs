// 1. Plain solution
using System;
using System.Linq;
using System.Text;

public class Accumul 
{
	public static String Accum(string s) 
  {
    var res = new StringBuilder();
    for (int i = 0; i < s.Length; i++)
    {
      string l1 = s[i].ToString().ToUpper();
      string l2 = string.Concat(Enumerable.Repeat(s[i].ToString().ToLower(), i));
      res.Append(l1 + l2 + "-");
    }
    return res.ToString().Remove(res.Length - 1, 1);
  }
}

// 2. Clever Solution
using System;
using System.Linq;

public class Accumul  {
  public static String Accum(string s) {
    return String.Join("-", s.Select((c, i) => Char.ToUpper(c) + new String(Char.ToLower(c), i)));
  }
}
