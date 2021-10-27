package kata

import (
  "strings"
  "sort"
)

func TwoSort(arr []string) string {
  sort.Strings(arr)
  a := strings.Split(arr[0], "")
  return strings.Join(a, "***")
}
