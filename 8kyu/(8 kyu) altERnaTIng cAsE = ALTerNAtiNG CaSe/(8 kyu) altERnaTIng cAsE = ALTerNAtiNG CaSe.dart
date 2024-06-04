String toAlternatingCase(final String str) {
  return String.fromCharCodes(
    str.runes.map(
      (int rune) {
        if (rune >= 'a'.codeUnitAt(0) && rune <= 'z'.codeUnitAt(0)) {
          return rune - 'a'.codeUnitAt(0) + 'A'.codeUnitAt(0);
        } else if (rune >= 'A'.codeUnitAt(0) && rune <= 'Z'.codeUnitAt(0)) {
          return rune - 'A'.codeUnitAt(0) + 'a'.codeUnitAt(0);
        } else {
          return rune;
        }
      },
    ),
  );
}