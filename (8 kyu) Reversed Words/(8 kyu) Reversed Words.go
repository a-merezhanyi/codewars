package kata

import "strings"

func ReverseWords(str string) string {
  words := strings.Split(str, " ")
  res := ""
  
  for _, w := range words {
    res = w + " " + res
  }
  
  return res[:len(res)-1]
}
