/** If you can't sleep, just count sheeps (8 kyu)
 * https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheeps
 *
 * Given a number, 3 for example, return a string with a murmur:
 * "1 sheep...2 sheep...3 sheep..."
 */
/* #1
var countsheep = function (num){
    //your code here
}
*/
/* #2
var countsheep = function (num){
  let result = '';
  
  for (let i = 1; i <= num; i++) {
    result += i + ' sheep...'
  }
  
  return result
}
*/
/* #3
const countsheep = num =>
  Array(num)
    .fill()
    .map((x, i) => `${i + 1} sheep...`)
    .join('')
*/
/* #4 */
const countsheep = num =>
  [...Array(num)].map((x, i) => `${i + 1} sheep...`).join("");
