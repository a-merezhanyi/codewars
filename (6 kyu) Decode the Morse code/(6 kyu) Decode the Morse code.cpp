std::string decodeMorse(std::string morseCode) {
    // Remove starting spaces and trailing spaces.
    size_t start = morseCode.find_first_not_of(" ");
    size_t end = morseCode.find_last_not_of(" ") + 1;

    std::string result;
    std::string word;
    for (size_t i = start; i < end; ++i) {
        if (morseCode[i] == ' ') {
            // Flush and clean up the current word.
            result += MORSE_CODE[word];
            word.clear();
            // Check if we need insert extra space.
            if (i + 2 < end && morseCode[i + 1] == ' ' &&
                morseCode[i + 2] == ' ') {
                result += std::string(" ");
                i += 2;
            }
        } else {
            word += morseCode[i];
        }
    }
    return result + MORSE_CODE[word];
}
