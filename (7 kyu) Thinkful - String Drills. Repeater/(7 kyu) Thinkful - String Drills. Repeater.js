//#1
// function repeater(string, n) {
//   var res = '';
//   while (n > 0) {
//     res += string;
//     n--;
//   }
//   return res;
// }
// #2
// function repeater(string, n) {
//   return new Array(n + 1).join(string);
// }
const repeater = (string, n) => string.repeat(n);
