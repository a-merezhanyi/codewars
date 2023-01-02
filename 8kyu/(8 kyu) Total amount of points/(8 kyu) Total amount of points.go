package kata

func Points(games []string) int {
	res := 0

	for _, game := range games {
		x := game[0]
		y := game[2]

		if x > y {
			res += 3
		} else if x == y {
			res += 1
		}
	}

	return res
}
