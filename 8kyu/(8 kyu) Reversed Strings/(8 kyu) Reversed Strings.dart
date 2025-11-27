// 1 Simple solution
String solution(str) {
  String res = "";
  for (int i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  return res;
}

// 2 Optimized solution
String solution(str) {
  List<String> word = str.split("");
  word = word.reversed.toList();
  return word.join("");
}

// 3 Clever solution
String solution(str) {
  return str
      .split("")
      .fold<String>("", (String res, String word) => word + res);
}

// 4 Coding golf
solution(str) => str.split("").reversed.join();
