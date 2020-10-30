// #1
// public class SortAndStar {
//   public static String twoSort(String[] s) {
//     int size = s.length;
//     String result = "";
//     for(int i = 0; i < size - 1; i++) {
//       for (int j = i + 1; j < s.length; j++) {
//         if(s[i].compareTo(s[j]) > 0) {
//           String temp = s[i];
//           s[i] = s[j];
//           s[j] = temp;
//         }
//       }
//     }
//     String word = s[0];
//     int length = word.length() - 1;
//     for(int i = 0; i < length; i++) {
//       result += word.charAt(i) + "***";
//     }
//     return result + word.charAt(length);
//   }
// }

// #2
// public class SortAndStar {
//   public static String twoSort(String[] s) {
//     java.util.Arrays.sort(s);
//     String word = s[0];
//     String[] arr = word.split ("");
//     String result = String.join("***", arr);
//     return result;
//   }
// }

// #3
public class SortAndStar {
  public static String twoSort(String[] s) {
    java.util.Arrays.sort(s);

    return String.join("***",s[0].split(""));
  }
}
