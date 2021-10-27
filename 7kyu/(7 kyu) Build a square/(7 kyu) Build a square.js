// #1
// function generateShape(int) {
//   let string = '';
//   for (let i = 0; i < int * int; i++) {
//     if (i % int === 0 && i !== 0) {
//       string += '\n';
//     }
//     string += '+';
//   }
//   return string;
// }
// #2
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
// #3
// function generateShape(int) {
//   let arr = [];
//   for (let i = 0; i < int; i++) {
//     arr.push('+'.repeat(int));
//   }
//   return arr.join('\n');
// }
// #4
// function generateShape(int) {
//   return [...Array(int)].map((x) => '+'.repeat(int)).join('\n');
// }
// #5
const generateShape = (int) =>
  [...Array(int)].map((x) => '+'.repeat(int)).join`\n`;
