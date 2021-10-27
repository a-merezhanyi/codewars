// #1
// function minValue(values) {
//   const arr = [...values];
//   arr.sort();
//   const dedupe = arr.filter((x, i, a) => i === a.indexOf(x));
//   const res = dedupe.join('');
//   return parseInt(res);
// }
// #2
// function minValue(values) {
//   const arr = [...values];
//   arr.sort();
//   const dedupe = [...new Set(arr)];
//   const res = dedupe.join('');
//   return parseInt(res);
// }
// #3
// function minValue(values) {
//   const res = [...new Set([...values])].sort().join``;
//   return parseInt(res);
// }
// #4
const minValue = (values) => +[...new Set([...values])].sort().join``;
