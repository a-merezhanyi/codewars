// 1 Simple solution
String noSpace(String x) {
  String res = '';
  for (int i = 0; i < x.length; i++) {
    if (x[i] != ' ') {
      res += x[i];
    }
  }
  return res;
}

// 2 Optimized solution
String noSpace(String x) {
  var res = '';
  for (var char in x.split('')) {
    if (char != ' ') {
      res += char;
    }
  }
  return res;
}

// 3 Clever solution
String noSpace(String x) {
  return x.replaceAll(' ', '');
}

// 4 Coding golf
noSpace(String x) => x.replaceAll(' ', '');
