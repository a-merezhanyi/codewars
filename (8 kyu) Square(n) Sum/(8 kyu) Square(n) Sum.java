// #1
// public class Kata {
//   public static int squareSum(int[] n) {
//     int sum = 0;
//     for (int num: n) {
//       sum += num * num;
//     }
//     return sum;
//   }
// }

// #2
import java.util.Arrays;

public class Kata {
  public static int squareSum(int[] n) {
    return Arrays.stream(n).map(num -> num * num).sum();
  }
}
