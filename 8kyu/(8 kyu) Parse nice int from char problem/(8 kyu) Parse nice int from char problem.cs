using System;

// 1 Simple solution
public class Kata
{
  public static int GetAge(string inputString)
  {
    char ageChar = inputString[0];
    int age = (int)Char.GetNumericValue(ageChar);
    return age;
  }
}

// 2 Optimized solution
public class Kata
{
  public static int GetAge(string inputString)
  {
    return int.Parse(inputString.Substring(0, 1));
  }
}

// 3 Clever solution
public class Kata
{
  public static int GetAge(string s) => s[0] - '0';
}
