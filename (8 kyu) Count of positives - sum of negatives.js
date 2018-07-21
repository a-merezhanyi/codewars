/** Count of positives / sum of negatives (8 kyu)
 * https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives
 * Given an array of integers.
 * Return an array, where the first element is the count of positives
 * numbers and the second element is sum of negative numbers.
 * If the input array is empty or null, return an empty array:
 * The passed array should NOT be changed. Read more here.
 * For example:
 * input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
 * return [10, -65].
 */
function countPositivesSumNegatives(input) {
  // #1
  //   if (!input || !input.length) {
  //     return [];
  //   }
  //   const res = [0, 0];
  //   input.forEach((x) => (x > 0 ? res[0]++ : (res[1] += x)));
  //   return res;
  // #2
  //   return input && input.length
  //     ? [
  //         input.filter((p) => p > 0).length,
  //         input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
  //       ]
  //     : [];
  // #3
  return input && input.length
    ? input.reduce(
        (p, x) => {
          x > 0 ? p[0]++ : (p[1] += x);
          return p;
        },
        [0, 0],
      )
    : [];
}
