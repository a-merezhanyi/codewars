// 1 Strightforward solution
function oddCount(n) {
    return Math.floor(n / 2);
}

// 2 Optimized solution
function oddCount(n) {
    return parseInt(n / 2);
}

// 3 Coding golf
const oddCount = n => parseInt(n / 2)
