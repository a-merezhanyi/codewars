// 1 Plain solution
public class Kata {
  public static boolean solution(String str, String ending) {
    return str.length() >= ending.length()
      ? str.substring(str.length() - ending.length()).equals(ending)
      : false;
  }
}

// 2 Clever solution
public class Kata {
  public static boolean solution(String str, String ending) {
    return str.endsWith(ending);
  }
}
