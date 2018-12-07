// #1
// function generateShape(int) {
//   let str = '';
//   let arr = [];
//   for (let i = 0; i < int; i++) {
//     str += '+';
//   }
//   for (let i = 0; i < int; i++) {
//     arr.push(str);
//   }
//   return arr.join('\n');
// }
// #2
// function generateShape(int) {
//   let arr = [];
//   for (let i = 0; i < int; i++) {
//     arr.push('+'.repeat(int));
//   }
//   return arr.join('\n');
// }
// #3
// function generateShape(int) {
//   return [...Array(int)].map((x) => '+'.repeat(int)).join('\n');
// }
// #4
const generateShape = (int) =>
  [...Array(int)].map((x) => '+'.repeat(int)).join`\n`;
