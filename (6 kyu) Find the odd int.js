/** Find the odd int (6 kyu).js https://www.codewars.com/kata/find-the-odd-int/train/javascript
 * Given an array, find the int that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
**/
function findOdd(A) {
  let digits = {};
  let num = 0;
  
  // while an odd digit is one and only one,
  // create a sum of all elements and
  // reduce all even
  A.forEach((n) => {
    if (!digits[n]) {
      num += digits[n] = n;
    } else {
      delete digits[n];
      num -= n;
    }
  });
  
  return num;
}
