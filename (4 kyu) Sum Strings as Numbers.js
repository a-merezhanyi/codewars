/**
 * Sum Strings as Numbers (4 kyu)
 * https://www.codewars.com/kata/5324945e2ece5e1f32000370
 * Given the string representations of two integers, return the string
 * representation of the sum of those integers.
 * For example:
 * sumStrings('1','2') // => '3'
 * A string representation of an integer will contain no characters besides
 * the ten numerals "0" to "9".
 */
const sumStrings = (a,b) => {
    // try a simple case
    let sum = String(+a + +b);
    if (!sum.includes`e+`) {
        return sum;
    }

    // perform BigInteger
    sum = '';
    let $ = 0;
    [a, b] = [a.split``, b.split``];
    while (a.length || b.length || $) {
        $ += ~~a.pop() + ~~b.pop();
        sum = $ % 10 + sum;
        $ = $ > 9;
    }
    return sum.replace(/^0+/, '');
}
