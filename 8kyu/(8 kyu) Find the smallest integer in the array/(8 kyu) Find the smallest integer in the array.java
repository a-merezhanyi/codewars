// #1
public class SmallestIntegerFinder {
  public static int findSmallestInt(int[] args) {
    int min = Integer.MAX_VALUE;
    
    for (int i = 0; i < args.length; i++) {
      min = args[i] < min ? args[i] : min;
    }
    
    return min;
  }
}

// #2
import java.util.Arrays;

public class SmallestIntegerFinder {
  public static int findSmallestInt(int[] args) {
    Arrays.sort(args);
    
    return args[0];
  }
}

// #3
import java.util.stream.IntStream;

public class SmallestIntegerFinder {
  public static int findSmallestInt(int[] args) {
    return IntStream.of(args).min().getAsInt();
  }
}
