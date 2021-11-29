// 1 Plain Solution
function howMuchILoveYou(nbPetals) {
    const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];
    while(nbPetals > 6) {
        nbPetals -= 6;
    }
    return phrases[(nbPetals - 1)];
}
// 2 Optimized solution
function howMuchILoveYou(nbPetals) {
    const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];
    return phrases[(nbPetals - 1) % phrases.length];
}

// 3 Clever solution
howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]