namespace Solution
{
    public class TwiceAsOldSolution
    {
        public static int TwiceAsOld(int dadYears, int sonYears)
        {
            int twiceOld = sonYears * 2;
            int res = dadYears - twiceOld;
            if (res > 0)
            {
                return res;
            }
            return -res;
        }
    }
}