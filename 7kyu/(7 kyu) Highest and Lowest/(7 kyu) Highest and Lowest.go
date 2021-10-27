package kata

import (
  "fmt"
  "math"
  "strings"
  "strconv"
  )

func HighAndLow(in string) string {
  min := math.MaxInt32
  max := math.MinInt32
  nums := strings.Fields(in)
  
  for _, n := range nums {
    x, _ := strconv.Atoi(n)
    if x > max {
      max = x
    }
    if x < min {
      min = x
    }
  }

  return fmt.Sprintf("%d %d", max, min)
}
