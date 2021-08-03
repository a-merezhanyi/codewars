package kata

func CountPositivesSumNegatives(input []int) []int {
  res := []int{0, 0}
  
  for i := 0; i < len(input); i++ {
    if input[i] > 0 {
      res[0]++
    } else {
      res[1] += input[i]
    }
  }
  
  return res
}
