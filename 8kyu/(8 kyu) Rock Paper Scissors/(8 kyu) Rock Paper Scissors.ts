// 1 Plain solution
export function rps(p1: string, p2: string): string {
  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "rock") {
    return "Player 2 won!";
  } else if (p1 === "rock" && p2 === "paper") {
    return "Player 2 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "scissors") {
    return "Player 2 won!";
  } else {
    return "Draw!";
  }
}

// 2 Optimized solution
export function rps(p1: string, p2: string): string {
  if (p1 === p2) return "Draw!";
  if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
  return "Player 2 won!";
}

// 3 Clever solution
export function rps(p1: string, p2: string): string {
  if (p1 === p2) return "Draw!";
  const rules: Record<string, string> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

// 4 Coding golf
export function rps(p1: string, p2: string): string {
  return p1 === p2
    ? "Draw!"
    : `Player ${p2[0] === { r: "s", p: "r", s: "p" }[p1[0]] ? 1 : 2} won!`;
}
