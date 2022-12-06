// 1 Plain solution
public class Kata {

    public static String well(String[] x) {
        int goodIdeas = 0;

        for (var idea : x) {
            if (idea.equals("good")) {
                goodIdeas += 1;
            }
            if (goodIdeas > 2) {
                return "I smell a series!";
            }
        }

        if (goodIdeas == 0) {
            return "Fail!";
        }

        return "Publish!";
    }

}

// 2 Optimized solution
import java.util.*;

public class Kata {
    public static String well(String[] x) {
        switch (Collections.frequency(Arrays.asList(x), "good")) {
            case 1:
            case 2:
                return "Publish!";
            case 0:
                return "Fail!";
            default:
                return "I smell a series!";
        }
    }
}

// 3 Clever solution
import java.util.Arrays;

class Kata {
    static String well(String[] ideas) {
        long count = Arrays.stream(ideas).filter(i -> i.equals("good")).count();
        return count > 2 ? "I smell a series!" : count > 0 ? "Publish!" : "Fail!";
    }
}
