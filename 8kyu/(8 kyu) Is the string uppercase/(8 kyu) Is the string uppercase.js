// 1 Plain solution
String.prototype.isUpperCase = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].toUpperCase() !== this[i]) {
      return false;
    }
  }

  return true;
};

// 2 Clever solution
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};
