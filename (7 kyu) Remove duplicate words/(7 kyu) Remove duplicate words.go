package kata

import "strings"

func RemoveDuplicateWords(str string) string {
  words := strings.Split(str, " ")
  res := ""
  
  for _, w := range words {
    if !strings.Contains(res, w) {
      res = res + " " + w
    }
  }
  
  return res
}
