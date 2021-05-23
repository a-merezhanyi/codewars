package kata

func Feast(beast string, dish string) bool {
  return beast[:1] == dish[:1] && beast[len(beast)-1:] == dish[len(dish)-1:]
}
