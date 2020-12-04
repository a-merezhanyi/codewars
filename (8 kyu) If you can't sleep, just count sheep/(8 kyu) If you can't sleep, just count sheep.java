// #1
class Kata {
  public static String countingSheep(int num) {
    String result = "";
    for (int i = 1; i <= num; i++) {
      result += i + " sheep...";
    }
    return result;
  }
}

// #2
class Kata {
  public static String countingSheep(int num) {
    String result = "";
    for(int i = 1; i <= num; i++){
      result += String.valueOf(i) + " sheep...";
    }
    return result;
  }
}

// #3
class Kata {
    public static String countingSheep(int num) {
        StringBuilder result = new StringBuilder();
        for (int i = 1; i <= num; i++) {
            result.append(i).append(" sheep...");
        }
        return result.toString();
    }
}

// #4
class Kata {
    public static String countingSheep(int num) {
        StringBuilder result = new StringBuilder();
        for (int i = 1; i <= num; i++) {
            result.append(String.format("%d sheep...", i));
        }
        return result.toString();
    }
}

// #5
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Kata {
  public static String countingSheep(int num) {
    return IntStream.rangeClosed(1, num)
                    .mapToObj(i -> i + " sheep...")
                    .collect(Collectors.joining());
  }
}
