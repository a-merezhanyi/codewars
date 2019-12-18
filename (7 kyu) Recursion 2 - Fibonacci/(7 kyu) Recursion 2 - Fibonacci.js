// #1
// const fibonacci = n => {
//   let sum = 0
//   if (n === 1 || n === 2) {
//     sum = 1
//   }
//   else {
//     sum += fibonacci(n-1) + fibonacci(n-2)
//   }
//   return sum
// }
// #2
// const fibonacci = (n) => {
//   if (n < 3) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
// #3
// const fibonacci = n => {
//   return (
//     n < 3
//       ? 1
//       : fibonacci(n-1) + fibonacci(n-2)
//     )
// }
// #4
const fibonacci = n => n < 3 ? 1 : fibonacci(n-1) + fibonacci(n-2)
