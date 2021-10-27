package kata

func Number(busStops [][]int) int {
  totalPeople := 0
  
  for _, stop := range busStops {
    totalPeople += stop[0]
    totalPeople -= stop[1]
  }
  
  return totalPeople
}
