package kata

func CountRedBeads(n int) int {
  if n < 2 {
    return 0
  } else {
    return (n - 1) * 2
  }
}
