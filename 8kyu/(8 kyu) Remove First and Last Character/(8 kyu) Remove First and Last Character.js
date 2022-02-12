// 1 Plain solution
function removeChar(str) {
    let result = '';

    for (let i = 1; i < str.length - 1; i++) {
        result += str[i];
    }

    return result;
};

// 2 Optimized solution
function removeChar(str) {
    return str
        .split('')
        .filter((s, i) => i && i < str.length - 1 && s)
        .join('');
};
  
// 3 Clever solution
function removeChar(str) {
    return str.slice(1, str.length - 1);
};

// 4 Coding golf
removeChar = str => str.slice(1, -1);
