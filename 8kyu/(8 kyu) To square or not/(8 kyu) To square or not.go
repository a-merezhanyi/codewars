package kata

import "math"

func SquareOrSquareRoot(arr []int) []int{
  var res []int

  for _, x := range arr {
    squaredNumber := math.Pow(float64(x), .5)

    if squaredNumber == math.Trunc(squaredNumber) {
      res = append(res, int(squaredNumber))
    } else {
      res = append(res, int(math.Pow(float64(x), 2)))
    }
  }

  return res
}
