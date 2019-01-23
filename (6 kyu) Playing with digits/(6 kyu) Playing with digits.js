// #1 Use string indexies
// function digPow(n, p) {
//   const str = n.toString();
//   let res = 0;
//   for (let i = 0; i < str.length; i++) {
//     res += Math.pow(parseInt(str[i]), p++);
//   }
//   return res % n === 0 ? res / n : -1;
// }
// #2 Use forEach over the string
// function digPow(n, p, res = 0, k = 1) {
//   n.toString()
//     .split('')
//     .forEach((x, i) => {
//       res += Math.pow(parseInt(x), p + i);
//     });
//   return res % n ? -1 : res / n;
// }
// #3 Use reduce
function digPow(n, p) {
  const res = String(n).split``.reduce((s, x, i) => s + Math.pow(x, p + i), 0);
  return res % n ? -1 : res / n;
}
