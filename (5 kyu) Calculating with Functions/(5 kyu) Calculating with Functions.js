const number = (op, num) => (op ? op[0](num, op[1]) : num);

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

const plus = (x) => [(a, b) => a + b, x];
const minus = (x) => [(a, b) => a - b, x];
const times = (x) => [(a, b) => a * b, x];
const dividedBy = (x) => [(a, b) => a / b, x];
