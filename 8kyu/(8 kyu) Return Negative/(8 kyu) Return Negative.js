// #1
// function makeNegative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return (num = num * -1);
//   }
// }
// #2
// function makeNegative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return -num;
//   }
// }
// #3
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }
// #4
// const makeNegative = (num) => (num < 0 ? num : -num);
// #5
const makeNegative = (num) => -Math.abs(num);
