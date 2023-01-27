int positiveSum(List<int> arr) => arr.fold(0, (a, c) => c > 0 ? a + c : a);
