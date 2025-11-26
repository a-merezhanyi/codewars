// 1 Simple solution
public class ReverseWords{
  public static String reverseWords(String str) {
    String[] words = str.split("\\s+");
    String res = "";
    for (String word: words) {
      res = word + " "+ res;
    }    
    return res.trim();
  }
}

// 2 Optimized solution
import java.util.*;
public class ReverseWords {
  public static String reverseWords(String str) {
    List<String> words = Arrays.asList(str.split("\\s+"));
    Collections.reverse(words);
    return String.join(" ", words);
  }
}

// 3 Clever solution
import java.util.*;

public class ReverseWords{
  public static String reverseWords(String str){
    return Arrays.stream(str.split("\\s+")).reduce((res, word) -> word + " " + res).get();
  }
}
