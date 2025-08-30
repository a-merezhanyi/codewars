using System;

// 1 Simple solution
public static class Kata
{
  public static string Greet(string name)
  {
    string str1 = "Hello, ";
    string str2 = " how are you doing today?";

    return str1 + name + str2;
  }
}

// 2 Optimized solution
public static class Kata
{
  public static string Greet(string name)
  {
    return "Hello, " + name + " how are you doing today?";
  }
}

// 3 Clever solution
public static class Kata
{
  public static string Greet(string name)
  {
    return $"Hello, {name} how are you doing today?";
  }
}

// 4 Coding golf
public static class Kata
{
  public static string Greet(string name) => $"Hello, {name} how are you doing today?";
}
