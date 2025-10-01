package kata

// 1 Simple solution
func RemoveChar(word string) string {
	result := ""
	for i := 1; i < len(word)-1; i++ {
		result += string(word[i])
	}
	return result
}

// 2 Optimized solution
func RemoveCharOptimized(word string) string {
	return word[1 : len(word)-1]
}
