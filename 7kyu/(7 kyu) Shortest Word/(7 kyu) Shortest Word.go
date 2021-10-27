package kata

import "strings"

func FindShort(s string) int {
  maxLen := len(s)
  words := strings.Fields(s)
  for _, word := range(words) {
    if len(word) <= maxLen {
      maxLen = len(word)
    }
  }
  
  return maxLen
}
