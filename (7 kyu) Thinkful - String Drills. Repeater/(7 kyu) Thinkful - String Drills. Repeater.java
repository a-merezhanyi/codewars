// 1 Plain solution
public class Repeater{
  public static String repeat(String string,long n) {
    String res = "";
    
    for (long i = 0; i < n; i++) {
      res += string;
    }
    
    return res;
  }
}

// 2 Optimizied solution
public class Repeater{
  public static String repeat(String string,long n){
   StringBuilder res = new StringBuilder();
   
        for (long i = 0; i < n; i++) {
            res.append(string);
        }
        
      return res.toString();
  }
}

// 3 Alternative solution
import java.util.stream.LongStream;
import java.util.stream.Collectors;
public class Repeater{
  public static String repeat(String string,long n){
    return LongStream
              .range(0, n)
              .mapToObj(i -> string)
              .collect(Collectors.joining());
  }
}

// 4 Clever solution
public class Repeater {
  public static String repeat(String string, long n) {
    return string.repeat((int)n);
  }
}
