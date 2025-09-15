// 1 Simple solution
num makeNegative(n) {
  if (n > 0) {
    return -n;
  } else {
    return n;
  }
}

// 2 Optimized solution
num makeNegative(n) {
  return n > 0 ? -n : n;
}

// 3 Clever solution
num makeNegative(n) {
  return -n.abs();
}

// 4 Coding golf
num makeNegative(n) => n > 0 ? -n : n;
