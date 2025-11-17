using System;

// 1 Plain solution
public class LoveDetector
{
    public static bool lovefunc(int flower1, int flower2)
    {
        bool positiveCase1 = (flower1 % 2 == 0) && (flower2 % 2 != 0);
        bool positiveCase2 = (flower1 % 2 != 0) && (flower2 % 2 == 0);

        if (positiveCase1 || positiveCase2) {
            return true;
        } else {
            return false;
        }
    }
}

// 2 Optimized solution
public class LoveDetector
{
    public static bool lovefunc(int flower1, int flower2)
    {
        bool isF1Even = (flower1 % 2 == 0);
        bool isF2Even = (flower2 % 2 == 0);
        return isF1Even != isF2Even;
    }
}

// 3 Clever solution
public class LoveDetector
{
    public static bool lovefunc(int flower1, int flower2)
    {
        return (flower1 + flower2) % 2 == 1;
    }
}

// 4 Coding golf
public class LoveDetector
{
    public static bool lovefunc(int f1,int f2)=>(f1+f2)%2==1;
}
