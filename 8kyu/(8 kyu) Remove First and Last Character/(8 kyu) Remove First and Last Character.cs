using System;

// 1 Simple solution
public class Kata
{
    public static string Remove_char(string s)
    {
        string result = "";

        for (int i = 1; i < s.Length - 1; i++)
        {
            result += s[i];
        }

        return result;
    }
}

// 2 Optimized solution
public class Kata
{
    public static string Remove_char(string s)
    {
        return s.Substring(1, s.Length - 2);
    }
}

// 3 Coding golf
public class Kata
{
    public static string Remove_char(string s) => s[1..^1];
}