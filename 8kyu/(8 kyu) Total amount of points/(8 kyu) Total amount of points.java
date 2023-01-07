public class TotalPoints {

  public static int points(String[] games) {
    int res = 0;

    for (var game : games) {
      var x = game.charAt(0);
      var y = game.charAt(2);

      if (x > y) {
        res += 3;
      } else if (x == y) {
        res += 1;
      }
    }

    return res;
  }
}