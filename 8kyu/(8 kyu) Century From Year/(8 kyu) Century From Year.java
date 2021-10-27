// 1 Plain solution
public class Solution {
  public static int century(int number) {
    return number % 100 == 0
      ? number / 100
      : (number / 100) + 1;
  }
}

// 2 Optimized solution
public class Solution {
  public static int century(int year) {
    return (year + 99) / 100;
  }
}

// 3 Clever solution
public class Solution {
  public static int century(int number) {
    return (int) Math.ceil((double) number / 100);
  }
}
