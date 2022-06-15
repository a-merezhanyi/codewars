// 1 Plain solution
package kata

func Between(a, b int) []int {
  var res []int
  for i := a; i <= b; i++ {
    res = append(res, i)
  }
  return res
}

// 2 Optimized solution
package kata

func Between(a, b int) []int {
  res := make([]int, b-a+1)

  for i, j := 0, a; j <= b; i, j = i+1, j+1 {
    res[i] = j
  }

  return res
}

// 3 Clever solution
package kata


func Between(a, b int) (res []int) {
  for ; a <= b; a ++ {
    res = append(res, a)
  }
  return
}
