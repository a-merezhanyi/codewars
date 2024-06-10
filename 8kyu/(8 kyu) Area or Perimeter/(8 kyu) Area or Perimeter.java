// 1 Plain solution
public class Solution {
    public static int areaOrPerimeter(int l, int w) {
        final boolean isSquare = l == w;

        if (isSquare) {
            return l * w;
        } else {
            return l * 2 + w * 2;
        }
    }
}

// 2 Optimized solution
public class Solution {
    public static int areaOrPerimeter(int l, int w) {
        return l == w ? l * w : l * 2 + w * 2;
    }
}

// 3 Clever solution
public class Solution {
    public static int areaOrPerimeter(int l, int w) {
        return l == w ? l * w : (l + w) * 2;
    }
}
