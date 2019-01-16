// #1
// function last(list) {
//   if (arguments.length > 1) {
//     return arguments[arguments.length - 1];
//   } else if (list.length > 1) {
//     return list[list.length - 1];
//   } else {
//     return list;
//   }
// }
// #2
function last(list) {
  return arguments.length > 1
    ? arguments[arguments.length - 1]
    : list[list.length - 1] || arguments[arguments.length - 1];
}
// #3
function last(list) {
  const last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
