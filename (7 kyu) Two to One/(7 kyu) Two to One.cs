using System.Collections.Generic;
using System.Linq;

public class TwoToOne
{
  public static string Longest (string s1, string s2) 
  {
    var h = new HashSet<char>();
    char[] charArr = s1.ToCharArray();  
    foreach (char ch in charArr)  
    {  
      h.Add(ch); 
    }
    charArr = s2.ToCharArray();  
    foreach (char ch in charArr)  
    {  
      h.Add(ch); 
    }
    var arr = h.ToArray();
    var res = arr.OrderBy(x=>x).ToArray();
    
    return string.Join("", res);
  }
}
