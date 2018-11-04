// #1
// function freqSeq(str, sep) {
//   var freq = {};
//   var newStr = '';

//   for (let i = 0; i < str.length; i++) {
//     freq[str[i]] = (freq[str[i]]) ? freq[str[i]] += 1 : 1;
//   }

//   for (let i = 0; i < str.length; i++) {
//     newStr += (i) ? sep + freq[str[i]] : freq[str[i]];
//   }

//   return newStr;
// }
// #2
// function freqSeq(str, sep) {
//   let letters = str.split("");
//   var count = letters.reduce(function(acc, l) {
//     acc[l] = acc[l] ? acc[l] + 1 : 1;
//     return acc;
//   }, {});
//   return letters.map(l => count[l]).join(sep);
// }
// #3
const freqSeq = (str, sep) =>
  str
    .split('')
    .map((e) => str.split(e).length - 1)
    .join(sep);
