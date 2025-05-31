// 1 Plain Solution
int points(List<String> games) {
  int res = 0;

  for (String game in games) {
    final List<String> gameParts = game.split(':');
    final int score1 = int.parse(gameParts[0]);
    final int score2 = int.parse(gameParts[1]);
    // Determine the result of the game
    if (score1 > score2) {
      res += 3; // Win
    } else if (score1 == score2) {
      res += 1; // Draw
    }
    // No points for loss
  }

  return res;
}

// 2 Optimized solution
int points(List<String> games) {
  return games.fold(0, (total, game) {
    final scores = game.split(':').map(int.parse).toList();
    return total +
        (scores[0] > scores[1]
            ? 3
            : scores[0] == scores[1]
            ? 1
            : 0);
  });
}
