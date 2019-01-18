// #1 Using an endless loop and Array
// function squareDigitsSequence(a) {
//   const nums = [];
//   while (!nums.includes(a)) {
//     nums.push(a);
//     a = String(a)
//       .split('')
//       .reduce((s, n) => s + n * n, 0);
//   }
//   return ++nums.length;
// }
// #2 Using Recursion
// function squareDigitsSequence(a, nums = []) {
//   nums.push(a);
//   a = String(a)
//     .split('')
//     .reduce((s, n) => s + n * n, 0);
//   if (nums.includes(a)) {
//     return ++nums.length;
//   }
//   return squareDigitsSequence(a, nums);
// }
// #3 Using Set
function squareDigitsSequence(a) {
  let nums = new Set();
  while (!nums.has(a)) {
    nums.add(a);
    a = +[...String(a)].reduce((s, n) => s + n * n, 0);
  }
  return nums.size + 1;
}
