// #1
// function last(list) {
//     if (arguments.length > 1) {
//       return arguments[arguments.length - 1];
//     }
//     if (Array.isArray(list)) {
//       return list.pop();
//     } else if (typeof list == 'string') {
//       return list.charAt(list.length - 1)
//     } else {
//       return list;
//     }
//   }
// #2
function last(list) {
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
