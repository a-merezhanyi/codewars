// 1 Plain solution
function boolToWord (bool) {
    if (bool === true) {
        return "Yes";
    } else {
        return "No";
    }
}

// 2 Optimized solution
function boolToWord (bool) {
    return bool ? "Yes" : "No"
}

// 3 Clever solution
const boolToWord = b => ["No", "Yes"][+b]