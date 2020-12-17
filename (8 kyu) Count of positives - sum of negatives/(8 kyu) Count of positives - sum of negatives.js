// 1 Plain Solution
function countPositivesSumNegatives(input) {
  if (!input || !input.length) {
    return [];
  }
  const res = [0, 0];
  input.forEach((x) => (x > 0 ? res[0]++ : (res[1] += x)));

  return res;
}
// 2 Optimized solution
function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
// 3 Coding golf
const countPositivesSumNegatives = input =>
  input && input.length
    ? input.reduce(
        (p, x) => {
          x > 0 ? p[0]++ : (p[1] += x);
          return p;
        },
        [0, 0],
      )
    : [];
