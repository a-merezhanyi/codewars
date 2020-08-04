package kata

// #1
// func SquareSum(numbers []int) int {
//   res := 0
//   for i := 0; i < len(numbers); i++ {
//     res += numbers[i] * numbers[i]
//   }  
//   return res
// }
// #2
// func SquareSum(numbers []int) (res int) {
//     for _, n := range numbers {
//        res = res + n*n
//     }
//     return
// }
// #3
func SquareSum(numbers []int) (res int) {
  for _, n := range numbers { res += n*n }
  return
}
