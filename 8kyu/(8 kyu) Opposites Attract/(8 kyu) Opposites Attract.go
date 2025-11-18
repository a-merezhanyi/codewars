package kata

// 1 Plain solution
func LoveFunc(flower1, flower2 int) bool {
	positiveCase1 := flower1%2 == 0 && flower2%2 != 0
	positiveCase2 := flower1%2 != 0 && flower2%2 == 0
	res := false
	if positiveCase1 || positiveCase2 {
		res = true
	}
	return res
}

// 2 Optimized solution
func LoveFunc(flower1, flower2 int) bool
	positiveCase1 := flower1%2 == 0 && flower2%2 != 0
	positiveCase2 := flower1%2 != 0 && flower2%2 == 0
	return positiveCase1 || positiveCase2
}

// 3 Clever solution
func LoveFunc(flower1, flower2 int) bool {
	return (flower1+flower2)%2 == 1
}

// 4 Coding golf
func LoveFunc(a,b int)bool{return(a^b)&1==1}