// #1
// function twoSort(s) {
//   return s
//     .sort((a, b) => a < b ? -1 : 1)[0]
//     .split("")
//     .join("***");
// }
// #2
// function twoSort(s) {
//   return s
//     .sort()[0]
//     .split("")
//     .join("***");
// }
// #3
const twoSort = (s) => [...s.sort()[0]].join('***');
