/** Reversed Words (8 kyu)
 * https://www.codewars.com/kata/reversed-words
 * Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
*/
// #1
// function reverseWords(str) {
//   return str.split` `.reverse().join` `;
// }
// #2
// const reverseWords = (str) => str.split` `.reverse().join` `;
// #3
const reverseWords = (s) => s.match(/\S+/g).reverse().join` `;
