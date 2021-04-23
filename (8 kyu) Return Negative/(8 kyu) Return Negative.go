package kata

import "math"

func MakeNegative(x int) int {
  var i float64 = float64(x)
  var res int = int(math.Abs(i))
  return -res
}
