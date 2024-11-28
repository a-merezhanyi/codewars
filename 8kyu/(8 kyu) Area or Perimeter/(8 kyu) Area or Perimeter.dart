// 1 Plain solution
int area_or_perimeter(int l, int w) {
  if (l == w) {
    return l * w;
  } else {
    return l * 2 + w * 2;
  }
}

// 2 Optimized solution
int area_or_perimeter(int l, int w) => l == w ? l * w : l * 2 + w * 2;

// 3 Clever solution
int area_or_perimeter(int l, int w) => l == w ? l * w : (l + w) * 2;
