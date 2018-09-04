String.prototype.toJadenCase = function() {
  return this.split` `.map((s) => s[0].toUpperCase() + s.slice(1)).join` `;
};
