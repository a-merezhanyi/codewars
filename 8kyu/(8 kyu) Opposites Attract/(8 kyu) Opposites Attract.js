// 1 Plain solution
function lovefunc(flower1, flower2) {
    const positiveCase1 = flower1 % 2 === 0 && flower2 % 2 !== 0;
    const positiveCase2 = flower2 % 2 === 0 && flower1 % 2 !== 0;
    let res = false;

    if (positiveCase1 || positiveCase2) {
        res = true;
    }

    return res;
}

// 2 Optimized solution
function lovefunc(flower1, flower2) {
    const positiveCase1 = !(flower1 % 2) && flower2 % 2;
    const positiveCase2 = !(flower2 % 2) && flower1 % 2;

    return !!(positiveCase1 || positiveCase2);
}

// 3 Clever solution
function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}

// 4 Coding golf
const lovefunc = (f1, f2) => f1 % 2 !== f2 % 2
