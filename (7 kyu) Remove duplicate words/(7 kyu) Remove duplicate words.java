// 1 Plain solution
import java.util.*;

class Solution {
  public static String removeDuplicateWords(String s) {
    String[] words = s.split(" ");
    List<String> uniqueWords = new ArrayList<String>();
    
    for (String word : words) {
      if (!uniqueWords.contains(word)) {
        uniqueWords.add(word);
      }
    }
    
    return String.join(" ", uniqueWords);
  }
}

// 2 Straightforward solution
class Solution {
  public static String removeDuplicateWords(String s) {
    StringBuilder res = new StringBuilder();
    
      for(String word : s.split(" ")) {
        if (!res.toString().contains(word)) {
           res.append(word).append(" ");
        }
      }
    
    return res.toString().trim();
  }
}

// 3 Clever solution
import java.util.*;
import java.util.stream.*;

class Solution {
  public static String removeDuplicateWords(String s){
    return Arrays
      .stream(s.split("\\s+"))
      .distinct()
      .collect(Collectors.joining(" "));
  }
}

// 4 Coding golf
import java.util.*;

public class Solution {
  public static String removeDuplicateWords(String s) {
    return String.join(" ", new LinkedHashSet<>(Arrays.asList(s.split(" "))));
  }
}
