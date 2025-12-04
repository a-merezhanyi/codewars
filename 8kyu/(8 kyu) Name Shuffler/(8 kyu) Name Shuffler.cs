using System;
using System.Linq;
// 1 Plain solution

public class Kata
{
  public static string NameShuffler(string str)
  {
    int spaceIndex = str.IndexOf(' ');
    string firstName = str.Substring(0, spaceIndex);
    string lastName = str.Substring(spaceIndex + 1);
    return lastName + " " + firstName;
  }
}

// 2 Optimized solution
public class Kata
{
  public static string NameShuffler(string str)
  {
    var names = str.Split(' ');
    return $"{names[1]} {names[0]}";
  }
}

// 3 Clever solution
public class Kata
{
  public static string NameShuffler(string str)
  {
    return string.Join(" ", str.Split(' ').Reverse());
  }
}

// 4 Coding golf
public class Kata
{
  public static string NameShuffler(string str)=>string.Join(" ",str.Split(' ').Reverse());
}
