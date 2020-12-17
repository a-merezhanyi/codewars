// 1 Plain Solution
public class Kata {
  public static int[] countPositivesSumNegatives(int[] input) {
    if (input == null || input.length == 0) {
      return new int[] {}
    };

    int count = 0, sum = 0;

    for (int i : input) {
      if (i > 0) {
        count ++;
      }
      if (i < 0) {
        sum += i;
      }
    }

    return new int[] { count, sum };
  }
}

// 2 Optimized solution
public class Kata {
  public static int[] countPositivesSumNegatives(int[] input) {    
    if (input == null || input.length == 0) {
      return new int[] {};
    }
    
    int[] res = { 0, 0 };

    for (int x: input) {
      if (x > 0) { res[0]++; } else { res[1] += x; }
    }
    
    return res;
  }
}

// 3 Clever solution
import java.util.stream.*;

public class Kata {
  public static int[] countPositivesSumNegatives(int[] input) {
    return input == null || input.length == 0 ? 
      new int[0] : 
      new int[] {
        (int)IntStream.of(input).filter(i -> i > 0).count(),
        IntStream.of(input).filter(i -> i < 0).sum()
      };
  }
}
