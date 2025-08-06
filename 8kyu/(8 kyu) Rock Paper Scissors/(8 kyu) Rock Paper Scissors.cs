// 1 Plain solution
public class Kata
{
  public string Rps(string p1, string p2)
  {
    if (p1 == "scissors" && p2 == "paper") {
    return "Player 1 won!";
    } else if (p1 == "scissors" && p2 == "rock") {
        return "Player 2 won!";
    } else if (p1 == "rock" && p2 == "paper") {
        return "Player 2 won!";
    } else if (p1 == "rock" && p2 == "scissors") {
        return "Player 1 won!";
    } else if (p1 == "paper" && p2 == "rock") {
        return "Player 1 won!";
    } else if (p1 == "paper" && p2 == "scissors") {
        return "Player 2 won!";
    } else {
        return "Draw!";
    }
  }
}

// 2 Optimized solution
public class Kata
{
  public string Rps(string p1, string p2)
  {
    if (p1 == p2) return "Draw!";
    if (p1 == "rock" && p2 == "scissors") return "Player 1 won!";
    if (p1 == "scissors" && p2 == "paper") return "Player 1 won!";
    if (p1 == "paper" && p2 == "rock") return "Player 1 won!";
    return "Player 2 won!";
  }
}

// 3 Clever solution
public class Kata
{
  public string Rps(string p1, string p2)
  {
    return p1 == p2
      ? "Draw!"
      : $"Player {(p1 == "rock" && p2 == "scissors" || p1 == "scissors" && p2 == "paper" || p1 == "paper" && p2 == "rock" ? 1 : 2)} won!";
  }
}

// 4 Coding golf
public class Kata
{
  public string Rps(string p1, string p2) =>
    p1 == p2
        ? "Draw!"
        : $"Player {(p1[0] == 'r' && p2[0] == 's' || p1[0] == 's' && p2[0] == 'p' || p1[0] == 'p' && p2[0] == 'r' ? 1 : 2)} won!";
}
