// 1 Plain solution
function between(a, b) {
    const res = [];

    for (let i = a; i <= b; i++) {
        res.push(i);
    }

    return res;
}

// 2 Optimized solution
function between(a, b) {
    const res = Array(b - a + 1).fill(0);
    return res.map((_, i) => a + i);
}

// 3 Clever solution
const between = (a, b) =>
    Array.from(
        new Array(b - a + 1),
        (_, i) => a + i
    );
