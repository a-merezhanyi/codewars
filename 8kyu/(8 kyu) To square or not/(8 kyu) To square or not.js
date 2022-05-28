// 1 Plain solution
function squareOrSquareRoot(array) {
    const res = [];

    for (let i = 0; i < array.length; i++) {
        const squaredNumber = Math.sqrt(array[i]);
        if (Number.isInteger(squaredNumber)) {
            res.push(squaredNumber);
        } else {
            res.push(Math.pow(array[i], 2));
        }
    }

    return res;
}

// 2 Optimized solution
function squareOrSquareRoot(array) {
    return array.map(
        n => Number.isInteger(Math.sqrt(n))
            ? Math.sqrt(n)
            : Math.pow(n, 2)
    );
}

// 3 Clever solution
const squareOrSquareRoot = array => array
    .map(n => n ** .5 % 1
        ? n * n
        : n ** .5
    );
