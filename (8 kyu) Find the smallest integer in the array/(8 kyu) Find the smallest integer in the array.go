package kata

import "sort"

func SmallestIntegerFinder(numbers []int) int {
  sort.Ints(numbers)
  return numbers[0]
}
