package kata

import "strings"

func ReverseWords(str string) string {
  words := strings.Split(str, " ")
  res := ""
  for _, w := range words {
    r := ""
    for _, s := range w {
        r = string(s) + r
    }
    res = res + " " + r
  }
  return res[1:]
}
