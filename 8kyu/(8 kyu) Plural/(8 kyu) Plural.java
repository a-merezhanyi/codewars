// 1 Simple solution
public class Plural{
  public static boolean isPlural(float f){
    if (n === 1 || n === -1) {
        return false;
    } else {
        return true;
    }
  }
}

// 2 Optimized solution
public class Plural{
  public static boolean isPlural(float f){
    return f != 1 && f != -1;
  }
}

// 3 Coding golf
public class Plural{
  public static boolean isPlural(float f){
    return f != 1;
  }
}