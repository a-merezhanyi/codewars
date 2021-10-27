public static class Kata
{
  public static int[] ReverseSeq(int n)
  {
    int[] res = new int[n];
    
    for (int i = 0; i < n; i++)
    {
      res[i] = res.Length - i;
    }
    
    return res;
  }
}
