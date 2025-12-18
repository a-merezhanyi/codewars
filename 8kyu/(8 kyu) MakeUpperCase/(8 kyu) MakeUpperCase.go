package kata

// 1 Simple solution
func MakeUpperCase(str string) string {
	res := ""
	for _, char := range str {
		if char >= 'a' && char <= 'z' {
			res += string(char - 32)
		} else {
			res += string(char)
		}
	}
	return res
}

// 2 Optimized solution
import "regexp"
func MakeUpperCase(str string) string {
	var re = regexp.MustCompile("[a-z]")
	return re.ReplaceAllStringFunc(str, func(s string) string {
		return string(s[0] - 32)
	})
}

// 3 Clever solution
import "strings"

func MakeUpperCase(str string) string {
	return strings.ToUpper(str)
}
