public class Kata
{
    public static string Well(string[] x)
    {
        int goodIdeas = 0;

        foreach (var idea in x)
        {
        if (idea == "good") {
            goodIdeas++;
        }
        if (goodIdeas > 2)
        {
            return "I smell a series!";
        }
        }

        if (goodIdeas == 0)
        {
        return "Fail!";
        }

        return "Publish!";
    }
}