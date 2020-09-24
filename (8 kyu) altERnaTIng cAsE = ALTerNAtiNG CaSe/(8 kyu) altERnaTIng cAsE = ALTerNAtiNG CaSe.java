public class StringUtils {
  
  public static String toAlternativeString(String string) {
    String result = "";
    for (int i =0; i < string.length(); i++) {
      String c = Character.toString(string.charAt(i));
      if (c.toUpperCase() == c) {
        result += c.toLowerCase();
      } else {
        result += c.toUpperCase();
      }
    }
    
    return result;
  }

}
