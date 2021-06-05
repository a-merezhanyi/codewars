package kata

import (
  "strings"
  "sort"
)

func TwoToOne(s1 string, s2 string) string {
  str := s1 + s2
  s := strings.Split(str, "")
  sort.Strings(s)
  
  keys := make(map[string]bool)
  list := []string{}
  for _, entry := range s {
    if _, value := keys[entry]; !value {
      keys[entry] = true
      list = append(list, entry)
    }
  }
  
  return strings.Join(list, "")
}
