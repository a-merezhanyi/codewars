// #1
// function countRedBeads(n) {
//   return n < 2 ? 0 : (n - 1) * 2;
// }
// #2
// const countRedBeads = (n) => (n < 2 ? 0 : (n - 1) * 2);
// #3
// const countRedBeads = (n) => ((n || 1) - 1) * 2;
// #4
// maximum value -> two for every two beads times number of blue beads - 1
const countRedBeads = (n) => Math.max(0, (n - 1) * 2);
