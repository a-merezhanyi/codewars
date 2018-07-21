/** Square(n) Sum (8 kyu)
 * https://www.codewars.com/kata/square-n-sum
 * Complete the squareSum/square_sum/SquareSum method so that it squares
 * each number passed into it and then sums the results together.
 * For example:
 * square_sum([1, 2, 2]) // should return 9
 */
// #1
// function squareSum(numbers){
//     return numbers.reduce((a, x) => a + (x * x), 0)
// }
// #2
const squareSum = (numbers) => numbers.reduce((a, x) => a + x * x, 0);
