/** CamelCase Method (6 kyu) https://www.codewars.com/kata/camelcase-method/
 * Write simple .camelcase method (camel_case function in PHP) for strings. All
 * words must have their first letter capitalized without spaces.
 * 
 * Example:
 * "hello case".camelCase() => HelloCase
 * "camel case word".camelCase() => CamelCaseWord
**/
String.prototype.camelCase = function() {
  return this
          .split(' ')
          .map((str) => {
            return str
                    .charAt(0)
                    .toUpperCase() + str.slice(1);
          })
          .join('');
}