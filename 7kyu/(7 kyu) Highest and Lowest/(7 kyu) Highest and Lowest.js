// #1
// function highAndLow(numbers) {
//   const arr = numbers.split(' ').map(Number);
//   const min = Math.min.apply(null, arr);
//   const max = Math.max.apply(null, arr);
//
//   return max + ' ' + min;
// }
// #2
// function highAndLow(numbers) {
//   const arr = numbers.split(' ').map(Number);
//   return Math.max(...arr) + ' ' + Math.min(...arr);
// }
// #3
const highAndLow = (numbers) =>
  `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;
