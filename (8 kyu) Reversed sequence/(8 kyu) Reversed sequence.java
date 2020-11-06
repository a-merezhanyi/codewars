// #1
// public class Sequence{
//   public static int[] reverse(int n) {
//     int res[] = new int[n];
//     int j = 0;
//     for (int i = n; i > 0; i--) {
//       res[j++] = i;
//     }
//     return res;
//   }
// }

// #2
// public class Sequence{
//   public static int[] reverse(int n){
//     int res[] = new int[n];
//     for (int i = 0; i < n; i++) 
//       res[i] = n - i;
//     return res;
//   }
// }

// #3
import java.util.stream.IntStream;

public class Sequence{
  public static int[] reverse(int n){ 
    return IntStream.range(-n, 0).map(Math::abs).toArray();
  }
}
