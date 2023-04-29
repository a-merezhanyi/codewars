// 1 Plain solution
int doubleInteger(int i) {
  return i * 2;
}

// 2 Optimized solution
int doubleInteger(int i) {
  return i + i;
}

// 3 Clever solution
int doubleInteger(int i) {
  return i << 1;
}

// 4 Coding golf
int doubleInteger(int i) => i << 1;
