// 1 Plain solution
function positiveSum(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res += arr[i];
        }
    }

    return res;
}

// 2 Optimized solution
function positiveSum(arr, res = 0) {
    arr.forEach(x => res += x > 0 ? x : 0);

    return res;
}

// 3 Clever solution
function positiveSum(arr) {
    return arr.reduce((a, c) => a += c > 0 ? c : 0, 0);
}

// 4 Coding golf
positiveSum = arr =>
    arr.reduce((a, c) => a += c > 0 ? c : 0, 0);
