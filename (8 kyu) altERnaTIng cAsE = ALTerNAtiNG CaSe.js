/** altERnaTIng cAsE <=> ALTerNAtiNG CaSe (8 kyu)
 * http://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case
 * Define String.prototype.toAlternatingCase (or a similar
 * function/method such as
 * to_alternating_case/toAlternatingCase/ToAlternatingCase in your
 * selected language; see the initial solution for details) such that
 * each lowercase letter becomes uppercase and each uppercase letter
 * becomes lowercase. For example:
 * "hello world".toAlternatingCase() === "HELLO WORLD"
 */
String.prototype.toAlternatingCase = function() {
  return [...this].map(
    (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()),
  ).join``;
};
