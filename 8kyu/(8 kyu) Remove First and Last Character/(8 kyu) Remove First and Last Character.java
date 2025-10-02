// 1 Simple solution
public class RemoveChars {
    public static String remove(String str) {
        String result = "";

        for (int i = 1; i < str.length() - 1; i++) {
            result += str.charAt(i);
        }

        return result;
    }
}

// 2 Optimized solution
public class RemoveChars {
    public static String remove(String str) {
        if (str.length() <= 2) {
            return "";
        }
        return str.substring(1, str.length() - 1);
    }
}

// 3 Clever solution
public class RemoveChars {
    public static String remove(String str) {
        return str.replaceAll("^.|.$", "");
    }
}
