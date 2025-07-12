// 1 Plain solution
int century(year) {
  final century = year % 100 == 0 ? year ~/ 100 : year ~/ 100 + 1;
  return century;
}

// 2 Optimized solution
int century(int year) {
  return (year + 99) ~/ 100;
}

// 3 Clever solution
int century(int year) {
  return (year / 100).ceil();
}

// 4 Coding golf
int century(int y) => (y + 99) ~/ 100;
