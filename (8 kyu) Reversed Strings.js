/** Reversed Strings (8 kyu)
 * https://www.codewars.com/kata/reversed-strings
 *
 * Complete the solution so that it reverses the string value passed
 * into it.
 * solution('world'); // returns 'dlrow'
 */
// #1
// function solution(str){
//     return str.split("").reverse().join("");
// }
// #2
// const solution = (s) => s.split``.reverse().join``
// #3
const solution = (s) => [...s].reverse().join``;
