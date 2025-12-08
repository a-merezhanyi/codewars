// 1 Plain solution
function nameShuffler(str) {
    const spaceIndex = str.indexOf(" ");
    const firstName = str.slice(0, spaceIndex);
    const lastName = str.slice(spaceIndex + 1);

    return lastName + " " + firstName;
}

// 2 Optimized solution
function nameShuffler(str) {
    const name = str.split(" ")
    return `${name[1]} ${name[0]}`;
}

// 3 Clever solution
function nameShuffler(str) {
    return str.split(" ").reverse().join(" ");
}

// 4 Coding golf
nameShuffler = str =>
    str
        .split` `
        .reverse()
        .join` `;
