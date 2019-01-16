// #1
// function XO(str) {
//   let equal = 0;
//   str.split('').forEach((c) => {
//     if ('x' === c.toLowerCase()) {
//       equal += 1;
//     }
//     if ('o' === c.toLowerCase()) {
//       equal -= 1;
//     }
//   });
//   return equal === 0;
// }
// #2
// function XO(str, equal = 0) {
//   str.split``.forEach((c) => {
//     'x' === c.toLowerCase() && equal++;
//     'o' === c.toLowerCase() && equal--;
//   });
//   return equal === 0;
// }
// #3
// const XO = (str) =>
//   str.split``.reduce((a, c) => {
//     if ('x' === c.toLowerCase()) {
//       return a + 1;
//     } else if ('o' === c.toLowerCase()) {
//       return a - 1;
//     } else return a;
//   }, 0) === 0;
// #4
// const XO = (str) =>
//   str
//     .toLowerCase()
//     .split('')
//     .reduce((a, c) => ('x' === c ? ++a : 'o' === c ? --a : a), 0) === 0;
// #5
const XO = (str) => {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
};
