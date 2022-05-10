// 1 Plain solution
function getAge(inputString) {
    const years = inputString[0];
    const number = Number(years);

    return number;
}

// 2 Optimized solution
function getAge(inputString) {
    const years = inputString[0];

    return +years;
}

// 3 Clever solution
function getAge(inputString) {
    return parseInt(inputString)
}

// 4 Coding golf
getAge = parseInt
