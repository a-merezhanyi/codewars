import java.util.*;

public class Kata {
    public static final String generateShape(int n) {
        List<String> res = new ArrayList<>();
        for (int i = 0; i < n; i++) {
          res.add("+".repeat(n));
        }
        return String.join("\n", res);
    }
}
