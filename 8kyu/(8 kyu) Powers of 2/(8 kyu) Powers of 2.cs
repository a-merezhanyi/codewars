// 1 Simple solution
using System.Numerics;

public class Kata
{
  public static BigInteger[] PowersOfTwo(int n)
  {
    BigInteger[] result = new BigInteger[n + 1];
    for (int i = 0; i <= n; i++)
    {
      result[i] = BigInteger.Pow(2, i);
    }
    return result;
  }
}

// 2 Optimized solution
using System.Linq;
using System.Numerics;

public class Kata
{
  public static BigInteger[] PowersOfTwo(int n)
  {
    return Enumerable.Range(0, n + 1).Select(i => BigInteger.Pow(2, i)).ToArray();
  }
}

// 3 Clever solution
using System.Linq;
using System.Numerics;

public class Kata
{
  public static BigInteger[] PowersOfTwo(int n) => Enumerable.Range(0, n + 1).Select(i => new BigInteger(1) << i).ToArray();
}
