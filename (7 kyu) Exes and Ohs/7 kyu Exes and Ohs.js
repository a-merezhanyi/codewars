// #1
// function XO(str, equal = 0) {
//     str.split``.forEach(c => {
//       'x' === c.toLowerCase() && equal++
//       'o' === c.toLowerCase() && equal--
//     })
//     return equal === 0
// }
// #2
// const XO = (str) =>
//   str.split``.reduce((a, c) => {
//     if ('x' === c.toLowerCase()) {
//       return a + 1;
//     } else if ('o' === c.toLowerCase()) {
//       return a - 1;
//     } else return a;
//   }, 0) === 0;
// #3
const XO = (str) =>
  str
    .toLowerCase()
    .split('')
    .reduce((a, c) => ('x' === c ? ++a : 'o' === c ? --a : a), 0) === 0;
