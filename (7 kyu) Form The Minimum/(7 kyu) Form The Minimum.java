import java.util.stream.Collectors;
import java.util.*;

public class Minimum {
  public static int minValue(int[] values) {
    List<Integer> array = new ArrayList<>();
    for (int n : values) {
      array.add(n);
    }
    var res = array.stream().distinct().sorted().map(x->String.valueOf(x));
    return Integer.parseInt(res.collect(Collectors.joining()));
  }
}
