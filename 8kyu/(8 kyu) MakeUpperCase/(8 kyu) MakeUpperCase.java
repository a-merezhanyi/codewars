// 1 Simple solution
class Upper {
    public static String makeUpperCase(String str) {
        String result = "";

        for (int i = 0; i < str.length(); i++) {
            char cc = str.charAt(i);
            if (cc >= 'a' && cc <= 'z') {
                cc = (char) (cc - 32);
            }
            result += cc;
        }

        return result;
    }
}

// 2 Optimized solution
class Upper {
    public static String makeUpperCase(String str) {
        return str
            .chars()
            .mapToObj(c -> (char) c)
            .map(c -> (c >= 'a' && c <= 'z') ? (char) (c - 32) : c)
            .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
            .toString();
    }
}

// 3 Clever solution
class Upper {
    public static String makeUpperCase(String str) {
        return str.toUpperCase();
    }
}
