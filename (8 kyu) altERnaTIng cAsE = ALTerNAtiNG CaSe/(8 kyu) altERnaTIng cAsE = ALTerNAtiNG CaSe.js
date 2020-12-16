// 1 Plain solution
String.prototype.toAlternatingCase = function() {
  res = "";
  for(let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      res += this[i].toLowerCase();
    } else {
      res += this[i].toUpperCase();
    }
  }
  return res;
}

// 2 Straightforward solution
String.prototype.toAlternatingCase = function(res = "") {
  for(let i = 0; i < this.length; i++) {
    res += this[i] === this[i].toUpperCase()
      ? this[i].toLowerCase()
      : this[i].toUpperCase();
  }
  return res;
}

// 3 Optimized solution
String.prototype.toAlternatingCase = function() {
  return [...this].map(
    c => (c === c.toUpperCase()
          ? c.toLowerCase()
          : c.toUpperCase()),
  ).join('');
};

// 4 Clever solution
String.prototype.toAlternatingCase = function() {
  return this.
    replace(
      /[A-Za-z]/g,
      x => x > "Z"
        ? x.toUpperCase()
        : x.toLowerCase()
    ) 
}

// 5 Coding golf
String
  .prototype
  .toAlternatingCase =
  function() {
    return this.
      replace(
        /[A-z]/g,
        x => x[
          `to${x > "Z"
            ? "Upper"
            : "Lower"
          }Case`
        ]()
      ) 
}
