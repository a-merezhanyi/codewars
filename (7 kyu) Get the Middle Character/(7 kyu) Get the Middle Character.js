function getMiddle(s) {
  return (
    // (s.length % 2 == 0) ? s[Math.round(s.length / 2) - 1] : ''
    [s[Math.round(s.length / 2) - 1], ''][s.length % 2] +
    s[Math.floor(s.length / 2)]
  );
}
