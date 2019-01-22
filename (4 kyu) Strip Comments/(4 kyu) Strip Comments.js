const solution = (input, markers) =>
  input
    .split('\n')
    .map((s) => markers.reduce((t, m) => t.split(m)[0].trim(), s))
    .join('\n');
