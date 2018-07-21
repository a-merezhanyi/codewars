String.prototype.toAlternatingCase = function() {
  return [...this].map(
    (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()),
  ).join``;
};
