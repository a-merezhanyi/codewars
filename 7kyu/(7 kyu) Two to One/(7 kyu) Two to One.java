// 1 Plain solution
import java.util.*; 

public class TwoToOne {    
  public static String longest (String s1, String s2) {
    String str = s1 + s2;
    List<String> list = new ArrayList<String>(Arrays.asList(str.split("")));
    Collections.sort(list);
    Set<String> res = new LinkedHashSet<>(list);

    return String.join("", res);
  }
}

// 2 Optimized solution
public class TwoToOne {
   public static String longest (String s1, String s2) {
    StringBuilder res = new StringBuilder();
    (s1 + s2).chars().distinct().sorted().forEach(c -> res.append((char) c));
    return res.toString();
  }
}

// 3 Clever solution
public class TwoToOne {
  public static String longest (String s1, String s2) {
    String res = s1 + s2;
    return res
      .chars()
      .distinct()
      .sorted()
      .collect(
        StringBuilder::new,
        StringBuilder::appendCodePoint,
        StringBuilder::append
      ).toString();
  }
}
