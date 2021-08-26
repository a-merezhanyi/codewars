package kata

func GetMiddle(s string) string {
  if len(s) == 0 {
    return ""
  }
  return s[(len(s)-1)/2:len(s)/2+1]
}
