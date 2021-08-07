import java.util.stream.*;

public class Kata {
  public static int[] solution(final int[] nums) {
    if (nums == null || nums.length == 0) return new int[0];
    return IntStream.of(nums).sorted().toArray();
  }  
}
