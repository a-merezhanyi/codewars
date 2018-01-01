/**
 * Fibonacci Generator Function (6 kyu) https://www.codewars.com/kata/fibonacci-generator-function
 * This is a simple Kata to test your knowledge of generators. You will
 * create a generator function which produces a fibonacci sequence. The
 * first number in the sequence is 0. The next number in the sequence is 1.
 * Each subsequent number is the summation of the previous two numbers. The
 * next number after 1 would be 1 because 0 + 1 = 1. The next number would
 * be 2 because 1 + 1 = 2.
 * The fibonacci sequence starts at zero, calling fib.next() should step
 * through the next number in the fibonacci sequence and fib.next().value
 * will step through and produce the value.
 */
function *fibonacci(fn1 = 1, fn2 = 0, current = 0) {
    while(true) {
        [current, fn2, fn1] = [fn2, fn1, fn1 + fn2];

        yield current;
    }
}
