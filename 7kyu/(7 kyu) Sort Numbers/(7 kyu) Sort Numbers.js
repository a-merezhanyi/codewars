// #1
// function solution(nums) {
//   if (nums) {
//     return nums.sort((a, b) => a - b);
//   } else {
//     return [];
//   }
// }
// #2
// function solution(nums) {
//   return nums ? nums.sort((a, b) => a - b) : [];
// }
// #3
// const solution = (nums) => (nums ? nums.sort((a, b) => a - b) : []);
// #4
const solution = (nums) => (nums || []).sort((a, b) => a - b);
