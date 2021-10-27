// #1
// function accum(s) {
//   const res = [];
//   for (let i = 0; i < s.length; i++) {
//     let row = s[i].toUpperCase();
//     for (let j = 1; j <= i; j++) {
//       row += s[i].toLowerCase();
//     }
//     res.push(row);
//   }
//   return res.join('-');
// }
// #2
// function accum(s) {
//   return s
//     .split('')
//     .map((c, i) => {
//       let res = c.toUpperCase();
//       for (let j = 1; j <= i; j++) {
//         res += c.toLowerCase();
//       }
//       return res;
//     })
//     .join('-');
// }
// #3
const accum = (s) =>
  s.split``.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join`-`;
