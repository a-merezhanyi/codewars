namespace Solution
{
  public static class Program
  {
    public static string RepeatStr(int n, string s)
    {
      string res = "";
      for (int i = 0; i < n; i++)
      {
        res += s;
      }
      return res;
    }
  }
}
