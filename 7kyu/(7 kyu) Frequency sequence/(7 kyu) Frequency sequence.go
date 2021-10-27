package kata

import (
  "strconv"
  "strings"
  )

func FreqSeq(str string, sep string) string {
  frq := make(map[string]int)
  res := make([]string, len(str))
  
  for _, s := range str {
    l := string(s)
    frq[l] = frq[l] + 1
  }
  for i, _ := range res {
    x := string(str[i])
    res[i] = strconv.Itoa(frq[x])
  }
  
  return strings.Join(res, sep)
}
