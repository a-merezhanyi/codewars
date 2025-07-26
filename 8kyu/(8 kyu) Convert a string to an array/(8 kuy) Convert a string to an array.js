// 1 Plain Solution
function stringToArray(string) {
    const res = [];
    let word = '';

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];

        if (letter == " ") {
        res.push(word);
        word = '';
        } else {
        word += letter;
        }
    }

    res.push(word); // add the last one word
    return res;
}

// 2 Optimized solution
function stringToArray(string) {
    const res = string.split(" ");
    return res;
}

// 3 Coding golf
const stringToArray=s=>s.split` `
