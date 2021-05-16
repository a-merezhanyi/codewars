package kata

import "strings"

func AbbrevName(name string) string{
  words := strings.Split(name, " ")
  res := ""
  res += string(words[0][0])
  res += "."
  res += string(words[1][0])
  return strings.ToUpper(res)
}
