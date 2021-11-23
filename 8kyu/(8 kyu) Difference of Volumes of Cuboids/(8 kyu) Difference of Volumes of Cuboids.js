// 1 Plain Solution
function findDifference(a, b) {
    const volume1 = a[0] * a[1] * a[2];
    const volume2 = b[0] * b[1] * b[2];
    return Math.abs(volume1 - volume2);
}

// 2 Straightforward solution
function findDifference(a, b) {
    const volume = f => f[0] * f[1] * f[2];
    return Math.abs(volume(a) - volume(b));
}

// 3 Optimized solution
function findDifference(a, b) {
    const volume = f => f.reduce((a, c) => a * c);
    return Math.abs(volume(a) - volume(b));
}

// 4 Clever solution
const findDifference = (a, b) =>
    Math.abs(
        a.reduce((a, c) => a * c) -
        b.reduce((a, c) => a * c)
    );

// 5 Coding golf
const findDifference = (a, b) =>
    (
        f = (a,b) => a * b,
        Math.abs(a.reduce(f) - b.reduce(f))
    )