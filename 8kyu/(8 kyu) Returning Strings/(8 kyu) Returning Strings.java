// 1 Plain solution
public class Kata
{
  public static String greet(String name)
  {
    String str1 = "Hello, ";
    String str2 = " how are you doing today?";

    return str1 + name + str2;
  }
}

// 2 Optimized solution
public class Kata
{
  public static String greet(String name)
  {
    return "Hello, " + name + " how are you doing today?";
  }
}

// 3 Clever solution
public class Kata
{
  public static String greet(String name)
  {
    return String.format("Hello, %s how are you doing today?", name);
  }
}