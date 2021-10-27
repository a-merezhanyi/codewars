// 1 Plain solution
public class BeadsCounter {
  public static int countRedBeads(final int nBlue) {
    if (nBlue < 2) {
      return 0;
    } else {
      return (nBlue - 1) * 2;
    }
  }
}

// 2 Optimized solution
public class BeadsCounter {
  public static int countRedBeads(final int nBlue) {
    return nBlue < 2 ? 0 : (nBlue - 1) * 2;
  }
}

// 3 Clever solution
public class BeadsCounter {
  public static int countRedBeads(final int nBlue) {
    return Math.max(0, (nBlue - 1) * 2);
  }
}

// Coding golf
class BeadsCounter { static int countRedBeads(int n) { return Math.max(0, n - 1) << 1; } }
