using System.Linq;

public static class Kata
{
    public static int TotalPoints(string[] games)
    {
        int res = 0;

        foreach (string game in games)
        {
            int x = game[0];
            int y = game[2];

            if (x > y)
            {
                res += 3;
            }
            else if (x == y)
            {
                res += 1;
            }
        }

        return res;
    }
}