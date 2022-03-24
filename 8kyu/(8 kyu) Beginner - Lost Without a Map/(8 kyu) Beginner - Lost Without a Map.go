package kata

func Maps(x []int) []int {
	res := make([]int, len(x))

	for i, y := range x {
		res[i] = y * 2
	}

	return res
}
