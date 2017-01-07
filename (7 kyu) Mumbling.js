/** Mumbling (7 kyu) https://www.codewars.com/kata/mumbling/train/javascript
 * This time no story, no theory. The examples below show you how to
 * write function accum:
 *
 * Examples:
 * accum("abcd");    // "A-Bb-Ccc-Dddd"
 * accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt");    // "C-Ww-Aaa-Tttt"
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
**/
function accum(s) {
  return s
    .split('')
    .map(
      (el, i) => (/^[a-zA-Z]$/) ? el.toUpperCase() + el.repeat(i).toLowerCase() : ''
    )
    .join('-');
}