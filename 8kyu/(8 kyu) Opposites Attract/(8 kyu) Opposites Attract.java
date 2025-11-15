// 1 Simple solution
public class OppositesAttract {

  public static boolean isLove(final int flower1, final int flower2) {

    boolean positiveCase1 = flower1 % 2 == 0 && flower2 % 2 != 0;
    boolean positiveCase2 = flower1 % 2 != 0 && flower2 % 2 == 0;
    boolean result = false;

    if (positiveCase1 || positiveCase2) {
      result = true;
    }

    return result;

  }

}

// 2 Optimized solution
public class OppositesAttract {
    public static boolean isLove(final int flower1, final int flower2) {
        boolean result = (flower1 + flower2) % 2 != 0;
        return result;
    }
}

// 3 Clever solution
public class OppositesAttract {
    public static boolean isLove(final int flower1, final int flower2) {
        return flower1 % 2 != flower2 % 2;
    }
}
