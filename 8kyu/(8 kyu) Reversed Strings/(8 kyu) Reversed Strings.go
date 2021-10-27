package kata

func Solution(word string) (result string) {
  for _, c := range word {
    result = string(c) + result
  }
  return 
}
