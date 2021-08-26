public class Kata
{
  public static string GetMiddle(string s)
  {
    int middle = (s.Length - 1)/ 2;
    int len = 1;
    
    if (s.Length % 2 == 0)
      len = 2;
    
    return s.Substring(middle, len);
  }
}
