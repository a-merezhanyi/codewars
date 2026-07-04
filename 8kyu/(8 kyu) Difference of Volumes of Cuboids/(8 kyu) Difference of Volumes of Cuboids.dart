// 1 Plain Solution
int findDifference(List<int> a, List<int> b) {
  final volume1 = a[0] * a[1] * a[2];
  final volume2 = b[0] * b[1] * b[2];
  return (volume1 - volume2).abs();
}

// 2 Straightforward solution
int findDifference(List<int> a, List<int> b) {
  final volume = (List<int> f) => f[0] * f[1] * f[2];
  return (volume(a) - volume(b)).abs();
}

// 3 Clever solution
int findDifference(List<int> a, List<int> b) {
  return (a.reduce((a, c) => a * c) - b.reduce((a, c) => a * c)).abs();
}

// 5 Coding golf
int findDifference(List<int> a, List<int> b) =>
    (a.reduce((a, c) => a * c) - b.reduce((a, c) => a * c)).abs();
