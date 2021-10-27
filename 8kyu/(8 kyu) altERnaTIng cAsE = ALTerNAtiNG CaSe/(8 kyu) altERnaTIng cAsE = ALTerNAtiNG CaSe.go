package kata

func ToAlternatingCase(str string) string {
  rs := make([]rune, len(str))
  for i, c := range str {
    r := c
    if c >= 'a' && c <= 'z' {
      r = c + 'A' - 'a'
    }
    if c >= 'A' && c <= 'Z' {
      r = c + 'a' - 'A'
    }
    rs[i] = r
  }
  return string(rs[:])
}
