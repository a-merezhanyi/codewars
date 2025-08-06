package kata

// 1 Plain solution
func Rps(p1, p2 string) string {
	if (p1 == "scissors" && p2 == "paper") {
		return "Player 1 won!"
	} else if (p1 == "scissors" && p2 == "rock") {
		return "Player 2 won!"
	} else if (p1 == "rock" && p2 == "paper") {
		return "Player 2 won!"
	} else if (p1 == "rock" && p2 == "scissors") {
		return "Player 1 won!"
	} else if (p1 == "paper" && p2 == "rock") {
		return "Player 1 won!"
	} else if (p1 == "paper" && p2 == "scissors") {
		return "Player 2 won!"
	} else {
		return "Draw!"
	}
}

// 2 Optimized solution
func Rps(p1, p2 string) string {
	if (p1 == p2) { return "Draw!" }
	if (p1 == "rock" && p2 == "scissors") { return "Player 1 won!" }
	if (p1 == "scissors" && p2 == "paper") { return "Player 1 won!" }
	if (p1 == "paper" && p2 == "rock") { return "Player 1 won!" }
	return "Player 2 won!"
}

// 3 Clever solution
func Rps(p1, p2 string) string {
	switch {
	case p1 == p2:
		return "Draw!"
	case (p1 == "rock" && p2 == "scissors") || (p1 == "scissors" && p2 == "paper") || (p1 == "paper" && p2 == "rock"):
		return "Player 1 won!"
	default:
		return "Player 2 won!"
	}
}
