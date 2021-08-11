import java.lang.*;

public class Accumul {
    
  public static String accum(String s) {
    String[] array = s.split("");
    
    for(int i = 0; i < array.length; i++){
      String s1 = array[i].toUpperCase();
      String s2 = array[i].toLowerCase().repeat(i);
      array[i] = s1 + s2;
    }
    
    return String.join("-", array);
  }
}
