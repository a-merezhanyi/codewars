public class Kata
{
  public static string AbbrevName(string name)
  {
    string[] words = name.Split(' ');
    string res = "";
    res += words[0][0];
    res += '.';
    res += words[1][0];
    return res.ToUpper();
  }
}
