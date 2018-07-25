// #1
// function reverseWords(str) {
//   return str.split` `.reverse().join` `;
// }
// #2
// const reverseWords = (str) => str.split` `.reverse().join` `;
// #3
const reverseWords = (s) => s.match(/\S+/g).reverse().join` `;
