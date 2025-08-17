// 1 Simple solution
int squareSum(List numbers) {
  double sum = 0;

  for (var num in numbers) {
    sum += num * num;
  }

  return sum.toInt();
}

// 2 Optimized solution
int squareSum(List<int> numbers) {
  return numbers.fold(0, (sum, num) => sum + num * num).toInt();
}

// 3 Coding golf
int squareSum(List<int> n) => n.fold(0, (a, x) => a + x * x).toInt();
