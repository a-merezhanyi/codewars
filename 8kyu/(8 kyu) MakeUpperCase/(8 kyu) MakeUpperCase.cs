// 1 Simple solution
public class Kata
{
    public static string MakeUpperCase(string str)
    {
        string result = "";
        for (int i = 0; i < str.Length; i++)
        {
            char c = str[i];
            if (c >= 'a' && c <= 'z')
            {
                result += (char)(c - ('a' - 'A'));
            }
            else
            {
                result += c;
            }
        }
        return result;
    }
}

// 2 Optimized solution
using System.Linq;

public class Kata
{
    public static string MakeUpperCase(string str) =>
        str.
            ToCharArray()
                .Select(c => c >= 'a' && c <= 'z' ? (char)(c - ('a' - 'A')) : c)
                .Aggregate("", (acc, c) => acc + c);
}

// 3 Clever solution
public class Kata
{
    public static string MakeUpperCase(string str) => str.ToUpper();
}
