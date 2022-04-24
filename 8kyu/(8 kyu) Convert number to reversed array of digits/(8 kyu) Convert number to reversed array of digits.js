// 1 Plain solution
function digitize(n) {
    const res = [];
    const str = String(n).split("");

    for (let i = str.length - 1; i >= 0; i--) {
        res.push(Number(str[i]));
    }

    return res;
}

// 2 Optimized solution
function digitize(n, res = []) {
    const str = String(n).split("");

    str.forEach(x => res.unshift(+x));

    return res;
}

// 3 Clever solution
function digitize(n) {
    return String(n).split("").map(x => +x).reverse();
}

// 4 Coding golf
digitize = n => [...String(n)].map(Number).reverse() 
