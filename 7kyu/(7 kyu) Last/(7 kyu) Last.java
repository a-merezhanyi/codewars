import java.util.List;

public class Solution {
  public static <T> T last(final List<T> list) {
    if(list == null || list.isEmpty()) {
      return null;
    } else {
      return list.get(list.size()-1);
    }
  }
  public static char last(final String string) {
    if(string == null || string.isEmpty()) {
      return 0;
    } else {
      return string.charAt(string.length()-1);
    }
  }
  public static <T> T last(final T... list) {
    if(list == null) {
      return null;
    } else {
      return list[list.length-1];
    }
  }  
}
