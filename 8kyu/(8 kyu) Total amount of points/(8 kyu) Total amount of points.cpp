int points(const std::array<std::string, 10>& games) {
  int res = 0;
  for (auto game: games) {
    int x = game[0];
    int y = game[2];
    if (x > y) {
        res += 3;
    } else if (x == y) {
        res += 1;
    }
  }
  return res;
}