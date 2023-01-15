public class Kata {
    public static int[] squareOrSquareRoot(int[] array) {
        int[] res = new int[array.length];

        for (var i = 0; i < array.length; i++) {
            var squaredNumber = Math.sqrt(array[i]);
            if (squaredNumber == (int) squaredNumber) {
                res[i] = (int) squaredNumber;
            } else {
                res[i] = (int) Math.pow(array[i], 2);
            }
        }

        return res;
    }
}
