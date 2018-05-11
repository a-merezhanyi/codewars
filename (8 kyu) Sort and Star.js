/** Sort and Star (8 kyu)
 * https://www.codewars.com/kata/sort-and-star
 * You will be given an vector of string(s). You must sort it alphabetically
 * (case-sensitive!!) and then return the first value.
 * The returned value must be a string, and have "***" between each of its
 * letters.
 * You should not remove or add elements from/to the array.
 */
function twoSort(s) {
  return s
    .sort(/*(a, b) => a < b ? -1 : 1*/)[0]
    .split("")
    .join("***");
}

// const twoSort = s => [...s.sort()[0]].join('***');
