// 1 Plain solution
class StringCleaning {
    static String stringClean(final String text) {
        var res = new StringBuilder();
        for (char c : text.toCharArray()) {
            if (Character.isDigit(c)) {
                // If the character is a digit, skip it
                continue;
            }
            res.append(c);
        }
        return res.toString();
    }
}

// 2 Optimized solution
import java.util.stream.Collectors;

class StringCleaning {
    static String stringClean(final String text) {
        return text.chars()
                   .filter(c -> !Character.isDigit(c))
                   .mapToObj(c -> (char) c)
                   .map(String::valueOf)
                   .collect(Collectors.joining());
    }
}

// 3 Clever solution
class StringCleaning {
    static String stringClean(final String text) {
        return text.replaceAll("\\d", "");
    }
}
