// 1 Simple solution
public class CharProblem {
  public static int howOld(final String herOld) {

    String ageString = herOld.split(" ")[0];
    return Integer.parseInt(ageString);

  }
}

// 2 Optimized solution
public class CharProblem {
  public static int howOld(final String herOld) {
    return Character.getNumericValue(herOld.charAt(0));
  }
}

// 3 Clever solution
public class CharProblem {
  public static int howOld(final String herOld) {
    return herOld.charAt(0) - '0';
  }
}