// Initial code
// var wireCode; // Find the wire.
// Bomb.CutTheWire(wireCode);
// Initial code really doesn't help at all
// As we have in the description:
// "There is a global var that holds the numeric ID"
// So I need to look something weird in global variables (in "this")
for (let x in this) {
  console.log(x);
}
// Ho-ho! Now I have a clue: "boom0" or "boom" or "Bomb"
// According to the phrase: "that holds the numeric ID"
// I supose it is "boom0". Let's try. I compare it against a RegExp:
// a word "boom" plus a digit.
for (let x in this) {
  if (x.match(/boom\d+/)) {
    Bomb.CutTheWire(this[x]);
  }
}
// That works!
