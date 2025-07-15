// 1 Plain solution
function stringToNumber(str) {
    let i = 0;
    let res = 0;
    let isPositive = 1;

    if (str[i] === "-") {
        isPositive = -1;
        i++;
    }
    for (; i < str.length; i++) {
        res += str[i] * (Math.pow(10, str.length - i - 1));
    }

    return res * isPositive;
}
// 2 Optimized solution
function stringToNumber(str) {
    let res = 0;
    let isPositive = 1;

    for (let i = 0; i < str.length; i++) {
        i === 0 && str[i] === "-"
            ? isPositive = -1
            : res += str[i] * (Math.pow(10, str.length - i - 1));
    }

    return res * isPositive;
}

// 3 Clever solution
const stringToNumber = str => Number(str);

// 4 Coding golf
stringToNumber=Number;
