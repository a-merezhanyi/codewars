/**
 * Fibonacci Generator (5 kyu) https://www.codewars.com/kata/522498c9906b0cfcb40001fc
 * Create a function generator genfib() that returns a function fib() which
 * always returns the next fibonacci number on each invocation (and returns
 * 0 when being called the first time).
 * Example:
 * var fib = genfib();
 * fib(); // -> returns 0
 * fib(); // -> returns 1
 * fib(); // -> returns 1
 * fib(); // -> returns 2
 */
function *fibonacci(current = 0, next = 1) {
    while (true) {
        yield current;
        [current, next] = [next, current + next];
    }
}

function genfib() {
    const sequence = fibonacci();

    return function fib() {
        return sequence.next().value;
    }
}
