package kata

// 1 Plain solution
func Greet(name string) string {
	var str1 = "Hello, "
	var str2 = " how are you doing today?"

	return str1 + name + str2
}

// 2 Optimized solution
func Greet(name string) string {
	return "Hello, " + name + " how are you doing today?"
}

// 3 Clever solution
import "fmt"

func Greet(name string) string {
	return fmt.Sprintf("Hello, %s how are you doing today?", name)
}
