package kata

import "strings"

func Accum(s string) string {
  var sb []string
  letters := strings.Split(s, "")

  for i, letter := range letters {
    s := strings.Title(strings.Repeat(strings.ToLower(letter), i+1))
    sb = append(sb, s)
  }

  return strings.Join(sb, "-")
}
