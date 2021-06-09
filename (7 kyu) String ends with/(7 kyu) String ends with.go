package kata

import "strings"

func solution(str, ending string) bool {
  return strings.HasSuffix(str, ending) 
}
