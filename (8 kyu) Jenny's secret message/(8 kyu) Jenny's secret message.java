// #1
// public class Greeter {
//   public static String greet(String name) {
//     if(name.equals("Johnny")){
//       return "Hello, my love!";
//     }
//     return String.format("Hello, %s!", name);
//   }
// }

// #2
// public class Greeter {
//   public static String greet(String name) {
//     return (name.equals("Johnny"))
//       ? "Hello, my love!"
//       : String.format("Hello, %s!", name);
//   }
// }

// #3
public class Greeter {
  public static String greet(String name) {
    return String.format("Hello, %s!", (name.equals("Johnny"))
                         ? "my love"
                         : name
                         );
  }
}
