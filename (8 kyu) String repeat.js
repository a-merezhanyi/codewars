/** String repeat (8 kyu)
 * https://www.codewars.com/kata/string-repeat
 * Write a function called repeatStr which repeats the given string string
 * exactly n times.
 * repeatStr(6, "I") // "IIIIII"
 * repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 */
// #1
// function repeatStr (n, s) {
//     let str = '';
//     for (let i = 0; i < n; i++) {
//         str += s;
//     }
//     return str;
// }
// #2
// function repeatStr (n, s) {
//     return s.repeat(n)
// }
// #3
const repeatStr = (n, s) => s.repeat(n);
