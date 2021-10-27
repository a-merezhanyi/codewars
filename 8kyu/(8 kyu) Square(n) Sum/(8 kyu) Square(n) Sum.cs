public static class Kata
{
  public static int SquareSum(int[] n)
  {
    int res = 0;
    
    for (int i = 0; i < n.Length; i++)
    {
      res += n[i] * n[i];
    }
    
    return res;
  }
}
