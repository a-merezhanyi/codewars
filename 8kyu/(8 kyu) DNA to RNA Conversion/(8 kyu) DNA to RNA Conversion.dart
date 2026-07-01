// 1 Plain solution
String rnaToDna(String dna) {
  String res = '';
  for (int i = 0; i < dna.length; i++) {
    String c = dna.substring(i, i + 1);
    if (c == 'T') {
      res += 'U';
    } else {
      res += c;
    }
  }
  return res;
}

// 2 Optimized solution
String rnaToDna(String dna) {
  String res = '';
  for (String c in dna.split('')) {
    res += (c == 'T') ? 'U' : c;
  }
  return res;
}

// 3 Clever solution
String rnaToDna(String dna) {
  return dna.replaceAll('T', 'U');
}

// 4 Coding golf
String rnaToDna(String dna) => dna.replaceAll('T', 'U');
