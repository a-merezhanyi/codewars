/**
 * Calculating with Functions (5 kyu) https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/
 * This time we want to write calculations using functions and get the
 * results. Let's have a look at some examples:
 * seven(times(five())); // must return 35
 * four(plus(nine())); // must return 13
 * eight(minus(three())); // must return 5
 * six(dividedBy(two())); // must return 3
 * 
 * Requirements:
 * - There must be a function for each number from 0 ("zero") to 9 ("nine")
 * - There must be a function for each of the following mathematical
 * operations: plus, minus, times, dividedBy
 * - Each calculation consist of exactly one operation and two number
 * - The most outer function represents the left operand, the most inner
 * function represents the right operand
 */
const number = (op, num) => (op) ? op[0](num, op[1]) : num;

const zero = (op) => number(op, 0);
const one = (op) => number(op, 1);
const two = (op) => number(op, 2);
const three = (op) => number(op, 3);
const four = (op) => number(op, 4);
const five = (op) => number(op, 5);
const six = (op) => number(op, 6);
const seven = (op) => number(op, 7);
const eight = (op) => number(op, 8);
const nine = (op) => number(op, 9);

const plus = (x) => ([(a, b) => a + b, x]);
const minus = (x) => ([(a, b) => a - b, x]);
const times = (x) => ([(a, b) => a * b, x]);
const dividedBy = (x) => ([(a, b) => a / b, x]);
