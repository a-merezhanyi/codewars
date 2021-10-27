using System;

public static class Kata
{
  public static string HighAndLow(string numbers)
  {
    string[] res = {"0", "1"};
    string[] numbersArray;
    int max = Int32.MinValue;
    int min = Int32.MaxValue;
    
    numbersArray = numbers.Split(" ");;
    foreach (string n in numbersArray)
    {
      int num = Int32.Parse(n);
      if (num > max) max = num;
      if (num < min) min = num;
    }
    res[0] = max.ToString();
    res[1] = min.ToString();
    
    return String.Join(" ", res);
  }
}
