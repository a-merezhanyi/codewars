package kata
import "fmt"

func countSheep(num int) string {
  res := ""
  
  for i := 1; i <= num; i++ {
    res += fmt.Sprintf("%d sheep...", i)
  }
  
  return res
}
