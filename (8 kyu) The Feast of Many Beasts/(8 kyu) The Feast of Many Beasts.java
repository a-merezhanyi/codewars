public class Kata {
  public static boolean feast(String beast, String dish) {
    String b1 = beast.substring(0, 1);
    String d1 = dish.substring(0, 1);
    String b2 = beast.substring(beast.length() - 1, beast.length());
    String d2 = dish.substring(dish.length() - 1, dish.length());
    
    return b1.equals(d1) && b2.equals(d2);
  }
}
