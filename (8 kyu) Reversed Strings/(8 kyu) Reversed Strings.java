// #1
// public class Kata {
//   public static String solution(String str) {
//     String res = "";
//     for (int i = str.length() - 1; i >= 0; i--) {
//       res = res + str.charAt(i);
//     }
//     return res;
//   }
// }

// #2
// import java.util.*;
// public class Kata {
//   public static String solution(String str) {
//     List<String> word = Arrays.asList(str.split(""));
//     Collections.reverse(word);
//     return String.join("", word);
//   }
// }

// #3
// import java.util.*;
// public class Kata {
//   public static String solution(String str) {
//     return Arrays.stream(str.split("")).reduce((res, word) -> word + "" + res).get();
//   }
// }

// #4
public class Kata {
  public static String solution(String str) {
    return new StringBuilder(str).reverse().toString();
  }
}
