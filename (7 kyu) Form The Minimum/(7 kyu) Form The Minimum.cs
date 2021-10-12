using System;
using System.Linq;

class Kata
{
    public static long MinValue(int[] a)
    {
        var res = string.Concat(a.OrderBy(x => x).Distinct());
        return Convert.ToInt64(res);
    }
}
