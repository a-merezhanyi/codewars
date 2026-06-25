// 1 Plain solution
bool isUpperCase(String str) {
  for (int i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}

// 2 Optimized solution
bool isUpperCase(String str) {
  return str.runes.every((int rune) {
    var character = String.fromCharCode(rune);
    return character == character.toUpperCase();
  });
}

// 3 Clever solution
bool isUpperCase(String str) => str == str.toUpperCase();
