// #1
public class EvenOrOdd {
    public static String even_or_odd(int number) {
        if (number % 2 == 0) {
          return "Even";
        } else {
          return "Odd";
        }
    }
}

// #2
public class EvenOrOdd {
    public static String even_or_odd(int number) {
        return number % 2 == 0 ? "Even" : "Odd";
    }
}

// #3
public class EvenOrOdd {
    public static String even_or_odd(int number) {
        return (number & 1) == 0 ? "Even" : "Odd";
    }
}
