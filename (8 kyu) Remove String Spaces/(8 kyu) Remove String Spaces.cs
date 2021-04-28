namespace Solution 
{
  public static class SpacesRemover
  {
    public static string NoSpace(string input)
    {
      string res = "";
      for (int i = 0; i < input.Length; i++)
      {
        if (input[i] != ' ')
        {
          res += input[i];
        }
      }
      return res;
    }  
  }
}
