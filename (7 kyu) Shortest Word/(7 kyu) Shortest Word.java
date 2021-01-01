// 1 Plain solution
import java.util.Arrays;

public class Kata {
  public static int findShort(String s) {
    String[] arr = s.split(" ");
    int min = s.length();
    
    for (String w : arr) {
      if (w.length() < min) {
        min = w.length();
      }
    }
    
    return min;
  }
}

// 2 Optimized solution
import java.util.*;

public class Kata {
  public static int findShort(String s) {
    int min = s.length();
    
    for (String w : s.split(" ")) {
      min = Math.min(w.length(), min);
    }
    
    return min;
  }
}

// 3 Clever solution
import java.util.*;

public class Kata {
  public static int findShort(String s) {
    return Stream.of(s.split(" "))
      .mapToInt(String::length)
      .min()
      .getAsInt();
  }
}
