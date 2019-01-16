String.prototype.toJadenCase = function() {
  return this.split(' ')
    .map(function(s: string): string {
      return s.charAt(0).toUpperCase() + s.slice(1);
    })
    .join(' ');
};
