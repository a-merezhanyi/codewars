// #1
// public class StringUtils {
//   public static String toAlternativeString(String string) {
//     String result = "";
//     for (int i =0; i < string.length(); i++) {
//       String c = Character.toString(string.charAt(i));
//       if (c.toUpperCase() == c) {
//         result += c.toLowerCase();
//       } else {
//         result += c.toUpperCase();
//       }
//     }
//     return result;
//   }
// }

// #2
public class StringUtils {
    public static String toAlternativeString(String string) {
        String result = "";
        for (char c : string.toCharArray()) {
            if(Character.isUpperCase(c)) {
                result += Character.toLowerCase(c);
            } else {
                result += Character.toUpperCase(c);
            }
        }
        return result;
    }
}
