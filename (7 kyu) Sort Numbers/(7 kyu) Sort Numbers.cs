using System;

public class Kata
{
  public static int[] SortNumbers(int[] nums)
  {
    if(nums == null)
      nums = new int[0];

    Array.Sort(nums);
    return nums;
  }
}
