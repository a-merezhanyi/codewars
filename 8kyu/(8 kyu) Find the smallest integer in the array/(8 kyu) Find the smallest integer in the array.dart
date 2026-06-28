// 1 Simple solution
int findSmallestInt(List<int> arr) {
  int min = arr[0];

  for (int i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// 2 Straightforward solution
int findSmallestInt(List<int> arr) {
  int min = arr[0];

  arr.forEach((element) => {if (element < min) min = element});

  return min;
}

// 3 Optimized solution
int findSmallestInt(List<int> arr) {
  arr.sort((a, b) => a.compareTo(b));

  return arr[0];
}

// 4 Clever solution
int findSmallestInt(List<int> arr) {
  return arr.reduce((a, x) => a < x ? a : x);
}

// 5 Coding golf
int findSmallestInt(List<int> arr) => arr.reduce((a, x) => a < x ? a : x);
