package kata

// 1 Simple solution
func PowersOfTwo(n int) []uint64 {
	result := make([]uint64, n+1)
	var power uint64 = 1
	for i := 0; i <= n; i++ {
		result[i] = power
		power *= 2
	}
	return result
}

// 2 Optimized solution
func PowersOfTwo(n int) []uint64 {
	result := make([]uint64, n+1)
	for i := 0; i <= n; i++ {
		result[i] = 1 << i
	}
	return result
}

// 3 Clever solution
func PowersOfTwo(n int) (arr []uint64) {
	for i := 0; i <= n; i++ {
		arr = append(arr, 1 << i)
	}
	return
}