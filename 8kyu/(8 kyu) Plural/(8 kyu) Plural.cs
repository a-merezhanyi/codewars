// 1 Simple solution
public class Kata
{
  public static bool Plural(double n)
  {
    if (n == 1 || n == -1)
    {
      return false;
    } else
    {
      return true;
    }
  }
}

// 2 Optimized solution
public class Kata
{
  public static bool Plural(double n)
  {
    return n != 1 && n != -1;
  }
}

// 3 Clever solution
public class Kata
{
  public static bool Plural(double n) => n != 1;
}
