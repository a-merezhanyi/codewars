// 1 Plain Solution
function maps(x) {
    const res = [];

    for (let i = 0; i < x.length; i++) {
        res[i] = x[i] * 2;
    }

    return res;
}

// 2 Optimized solution
function maps(x) {
    const res = [];

    x.forEach((y, i) => res[i] = y * 2);

    return res;
}

// 3 Clever solution
function maps(x) {
    return x.map(y => y * 2);
}

// 4 Coding golf
const maps = x => x.map(y => y*2)
