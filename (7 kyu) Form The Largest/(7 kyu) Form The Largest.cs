using System;

class Kata
{
    public static int MaxNumber(int n)
    {
       char[] res = n.ToString().ToCharArray();

       Array.Sort(res);
       Array.Reverse(res);

       return int.Parse(new string(res));
    }
}
