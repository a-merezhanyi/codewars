package kata

func CountSheeps(arrayOfSheep []bool) int {
  var res int
  
  for i := 0; i < len(arrayOfSheep); i++ {
    if arrayOfSheep[i] == true {
      res += 1
    }
  }
  
  return res
}
