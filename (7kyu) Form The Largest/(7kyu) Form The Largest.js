// #1
// function maxNumber(n) {
//   const str = String(n);
//   const arr = str.split('');
//   const arrS = arr.sort((a, b) => b - a);
//   const res = arrS.join('');
//   return parseInt(res);
// }
// #2
// function maxNumber(n) {
//   return parseInt(
//     String(n)
//       .split('')
//       .sort((a, b) => b - a)
//       .join(''),
//   );
// }
// #3
// const maxNumber = (n) =>
//   parseInt(
//     String(n)
//       .split('')
//       .sort((a, b) => b - a)
//       .join(''),
//   );
// #4
// const maxNumber = (n) => Number(String(n).split``.sort().reverse().join``);
// #5
const maxNumber = (n) => +String(n).split``.sort().reverse().join``;
