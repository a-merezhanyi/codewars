def decodeMorse(morse_code):
    result = []
    for word in morse_code.strip().split("   "):
        decoded_word = ""
        for letter in word.split():
            decoded_word += MORSE_CODE[letter]
        result.append(decoded_word)
    return " ".join(result)
