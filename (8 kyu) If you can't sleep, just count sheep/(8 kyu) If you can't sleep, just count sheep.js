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
const countsheep = (num) =>
  [...Array(num)].map((x, i) => `${i + 1} sheep...`).join('');
