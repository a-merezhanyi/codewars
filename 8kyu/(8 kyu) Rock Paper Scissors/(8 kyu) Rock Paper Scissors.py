# 1 Plain solution
def rps(p1, p2):
    if p1 == "scissors" and p2 == "paper":
        return "Player 1 won!"
    elif p1 == "scissors" and p2 == "rock":
        return "Player 2 won!"
    elif p1 == "rock" and p2 == "paper":
        return "Player 2 won!"
    elif p1 == "rock" and p2 == "scissors":
        return "Player 1 won!"
    elif p1 == "paper" and p2 == "rock":
        return "Player 1 won!"
    elif p1 == "paper" and p2 == "scissors":
        return "Player 2 won!"
    else:
        return "Draw!"

# 2 Optimized solution
def rps(p1, p2):
    if p1 == p2: return "Draw!"
    if p1 == "rock": return "Player 1 won!" if p2 == "scissors" else "Player 2 won!"
    if p1 == "paper": return "Player 1 won!" if p2 == "rock" else "Player 2 won!"
    if p1 == "scissors": return "Player 1 won!" if p2 == "paper" else "Player 2 won!"

# 3 Clever solution
def rps(p1, p2):
    if p1 == p2: return "Draw!"
    outcomes = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    }
    return "Player 1 won!" if outcomes[p1] == p2 else "Player 2 won!"
