// 1 Plain solution
function booleanToString(b) {
    if (b === true) {
        return "true";
    } else {
        return "false";
    }
}

// 2 Optimized solution
function booleanToString(b) {
    return b
        ? "true"
        : "false";
}

// 3 Clever solution
const booleanToString = b => b.toString();

// 4 Coding golf
booleanToString=b=>`${b}`
