// 1 Simple solution
List<int> reverseSeq(int n) {
  List<int> result = [];
  for (int i = n; i > 0; i--) {
    result.add(i);
  }
  return result;
}

// 2 Optimized solution
List<int> reverseSeq(int n) {
  final result = List<int>.filled(n, 0);
  result.asMap().forEach((i, e) => result[i] = n - i);
  return result;
}

// 3 Clever solution
List<int> reverseSeq(int n) {
  return List<int>.generate(n, (int i) => n - i);
}

// 4 Coding golf
reverseSeq(n) => List<int>.generate(n, (i) => n - i);
