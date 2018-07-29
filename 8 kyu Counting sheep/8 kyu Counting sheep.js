// #1
// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter((x) => x === true).length;
// }
// #2
// const countSheeps = (arrayOfSheep) => arrayOfSheep.filter((x) => x).length;
// #3
const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;
