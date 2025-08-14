// 1 Simple solution
fn rps(p1: &str, p2: &str) -> &'static str  {
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

// 2 Optimized solution
fn rps(p1: &str, p2: &str) -> &'static str  {
    if (p1 == p2) { return "Draw!"; }
    if (p1 == "rock" && p2 == "scissors") { return "Player 1 won!"; }
    if (p1 == "scissors" && p2 == "paper") { return "Player 1 won!"; }
    if (p1 == "paper" && p2 == "rock") { return "Player 1 won!"; }
    return "Player 2 won!";
}

// 3 Clever solution
fn rps(p1: &str, p2: &str) -> &'static str  {
    match (p1, p2) {
        (x, y) if x == y => "Draw!",
        ("rock", "scissors") | ("scissors", "paper") | ("paper", "rock") => "Player 1 won!",
        _ => "Player 2 won!",
    }
}
