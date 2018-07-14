/** Even or Odd (8 kyu)
 * https://www.codewars.com/kata/even-or-odd
 * Create a function that takes an integer as an argument and returns
 * "Even" for even numbers or "Odd" for odd numbers.
 */
// #1
//  const even_or_odd = (number) => (number % 2 ? 'Odd' : 'Even');
// #2
const even_or_odd = (n) => ['Even', 'Odd'][n & 1];
