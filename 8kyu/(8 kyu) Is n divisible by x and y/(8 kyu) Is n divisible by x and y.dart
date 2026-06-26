// 1 Plain solution
bool isDivisible(int n, int x, int y) {
  var isDivisible = false;

  if (n % x == 0 && n % y == 0) isDivisible = true;

  return isDivisible;
}

// 2 Straightforward solution
bool isDivisible(int n, int x, int y) {
  return (n % x == 0 && n % y == 0) ? true : false;
}

// 3 Optimized solution
bool isDivisible(int n, int x, int y) {
  return n % x == 0 && n % y == 0;
}

// 4 Coding golf
bool isDivisible(int n, int x, int y) => n % x == 0 && n % y == 0;
