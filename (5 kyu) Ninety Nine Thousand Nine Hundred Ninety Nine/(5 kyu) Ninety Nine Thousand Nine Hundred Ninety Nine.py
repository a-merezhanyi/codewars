def number_to_english(n):
    return "" if n < 0 or n > 99999 or type(n) != int else [
        "zero", "one", "two", "three",
        "four", "five", "six", "seven",
        "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen"][n] if n < 20 else " ".join(
        [
            ["twenty", "thirty", "forty",
             "fifty", "sixty", "seventy",
             "eighty", "ninety"][(n-20)//10],
            number_to_english(n % 10)]
    ).replace(" zero", "").rstrip() if n < 100 else " ".join(
        [number_to_english(n//100)+" hundred", number_to_english(n % 100)]
    ).replace(" zero", "").rstrip() if n < 1000 else " ".join(
        [number_to_english(n//1000)+" thousand", number_to_english(n % 1000)]
    )
