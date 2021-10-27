// #1
// function solution(str, ending) {
//   const result = str.substr(str.length - ending.length, str.length);
//   return ending === result;
// }
// #2
// function solution(str, ending) {
//   return ending === str.substr(-ending.length);
// }
// #3
const solution = (str, ending) => str.endsWith(ending);
