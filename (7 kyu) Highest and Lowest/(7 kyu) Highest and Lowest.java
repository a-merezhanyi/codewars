public class Kata {
  public static String highAndLow(String numbers) {
    String[] str = numbers.split(" ");
    int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
    
    for(String s: str) {
      int x = Integer.parseInt(s);
      if(x < min) min = x;
      if(x > max) max = x;
      }
      
      return max + " " + min;
  }
}
