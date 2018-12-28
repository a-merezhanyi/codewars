// #1
// function solution(number) {
//   let result = 0;
//   for (let i = 1; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       result += i;
//     }
//   }
//   return result;
// }
// #2
// function solution(number) {
//   let result = 0;
//   for (let i = 1; i < number; i++) {
//     result += 0 === i % 3 || 0 === i % 5 ? i : 0;
//   }
//   return result;
// }
// #3
function solution(number) {
  return number < 1
    ? 0
    : [...new Array(number).keys()]
        .filter((n) => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
}
