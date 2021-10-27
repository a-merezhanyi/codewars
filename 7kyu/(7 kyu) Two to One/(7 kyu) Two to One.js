// #1
// function longest(s1, s2) {
//   let res = s1 + s2;
//   res = res.split('');
//   res = [...new Set(res)];
//   res = res.sort();
//   return res.join('');
// }
// #2
// const longest = (s1, s2) => [...new Set([...(s1 + s2)])].sort().join('');
// #3
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join``;
