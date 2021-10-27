package kata

func ReverseSeq(n int) []int {
  var res = make([]int, n)
  for i := 0; i < len(res); i++ {
    res[i] = len(res) - i
  }
  return res
}
