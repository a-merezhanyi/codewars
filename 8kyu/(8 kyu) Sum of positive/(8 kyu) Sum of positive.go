package kata

func PositiveSum(numbers []int) int {
  res := 0

  for _, n := range numbers {
    if (n > 0) {
      res += n
    }
  }

  return res
}
