// 1 Simple solution
public class Kata{
  public static long[] powersOfTwo(int n){
    long[] result = new long[n + 1];
    for (int i = 0; i <= n; i++) {
      result[i] = (long) Math.pow(2, i);
    }
    return result;
  }
}

// 2 Optimized solution (function and << operator)
import java.util.stream.IntStream;

public class Kata{
  public static long[] powersOfTwo(int n){
    return IntStream.range(0, n + 1).mapToLong(i -> 1L << i).toArray();
  }
}

// 3 Coding golf
import static java.util.stream.LongStream.rangeClosed;

interface Kata {
  static long[] powersOfTwo(int n) {
    return rangeClosed(0, n).map(i -> 1L << i).toArray();
  }
}