package kata

func Well(x []string) string {
	goodIdeas := 0

	for _, w := range x {
		if w == "good" {
			goodIdeas += 1
		}
	}

	if goodIdeas == 0 {
		return "Fail!"
	} else if goodIdeas > 0 && goodIdeas < 3 {
		return "Publish!"
	} else {
		return "I smell a series!"
	}
}
