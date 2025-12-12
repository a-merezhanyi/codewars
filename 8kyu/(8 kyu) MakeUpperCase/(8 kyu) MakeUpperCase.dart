// 1 Plain solution
String makeUpperCase(String str) {
  var res = "";

  for (int i = 0; i < str.length; i++) {
    final cc = str.codeUnitAt(i);
    final c = String.fromCharCode(cc - 32);
    // Convert symbols for a..z only
    res += cc <= 122 && cc >= 97 ? c : str[i];
  }

  return res;
}

// 2 Optimized solution
String makeUpperCase(String str) {
  return str.replaceAllMapped(
    RegExp(r'[a-z]'),
    (match) => match.group(0)!.toUpperCase(),
  );
}

// 4 Clever solution
String makeUpperCase(String str) {
  return str.toUpperCase();
}

// 5 Coding golf
makeUpperCase(s) => s.toUpperCase();
