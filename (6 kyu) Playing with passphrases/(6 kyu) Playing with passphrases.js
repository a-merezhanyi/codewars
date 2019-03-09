// #1 Bruteforce
// function playPass(s, n) {
//   let res = s.split``.map((a, i) => {
//     if (/\d/.test(a)) {
//       return 9 - a;
//     } else if (/\w/.test(a)) {
//       let res = a.charCodeAt(0) + n;
//       if (res > 90) {
//         res -= 26;
//       }
//       res = String.fromCharCode(res);
//       if (i % 2) {
//         return res.toLowerCase();
//       } else {
//         return res;
//       }
//     } else {
//       return a;
//     }
//   });
//   return res.reverse().join``;
// }
// #2 Optimized Bruteforce
// const playPass = (s, n) =>
//   s.split``
//     .map((a, i) => {
//       if (/\d/.test(a)) {
//         return 9 - a;
//       }
//       let charCode = a.charCodeAt() - 65;
//       if (/\w/.test(a)) {
//         charCode += n;
//         a = String.fromCharCode((charCode % 26) + 65);
//         if (i % 2) {
//           a = a.toLowerCase();
//         }
//       }
//       return a;
//     })
//     .reverse().join``;
// #3 Use RegEx replace
function playPass(s, n) {
  return s
    .replace(/\d/g, (a) => 9 - a)
    .replace(/[A-Z]/g, (l) =>
      String.fromCharCode(((l.charCodeAt(0) + n - 65) % 26) + 65),
    ).split``
    .map((a, i) => (i % 2 ? a.toLowerCase() : a.toUpperCase()))
    .reverse().join``;
}
