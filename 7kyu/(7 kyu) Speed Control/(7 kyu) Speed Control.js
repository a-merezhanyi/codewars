// 1 Plain solution
function gps(s, x) {
  const average = [];

  if (x.length < 2) {
    return 0;
  }

  for (let i = 0; i < x.length - 1; i++) {
    const n = (3600 * Math.abs(x[i] - x[i + 1])) / s;
    average.push(n);
  }

  const max = Math.max(...average);

  return Math.floor(max);
}

// 2 Optimized solution
function gps(s, x) {
  if (x.length < 2) {
    return 0;
  }

  return Math.floor(
    Math.max(
      ...x.map((_, i) => (3600 * Math.abs(x[i] - x[i + 1])) / s).slice(0, -1)
    )
  );
}

// 3 Clever solution
function gps(s, x) {
  return Math.max(...x.slice(1).map((a, i) => ((a - x[i]) / s) * 3600)) | 0;
}