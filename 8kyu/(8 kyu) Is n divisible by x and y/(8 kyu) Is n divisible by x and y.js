// 1 Plain solution
function isDivisible(n, x, y) {
    let isDivisible = false;

    if (n % x === 0 && n % y === 0) {
        isDivisible = true;
    }

    return isDivisible;
}
// 2 Straightforward solution
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0)
        ? true
        : false;
}
// 3 Optimized solution
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}
// 4 Clever solution
const isDivisible = (n, x, y) => !(n % x || n % y)
// 5 Coding golf
isDivisible = (n, x, y) => !(n%x+n%y)