function formatDuration (seconds) {
  const pluralization = (x, y) => x ? `${x} ${y}${x > 1 ? 's' : ''}` : '';
  const join = (x, y, z) => (x && y ? z ? ', ' : ' and ' : '') + y;
  const sufix = ['year', 'day', 'hour', 'minute', 'second'];
  
  const [y, d] = [seconds / 31536e3, (seconds / 864e2)%365]
    .map((t, i) => pluralization(Math.floor(t), sufix[i]))
  const [h, m, s] = new Date(1e3 * seconds)
    .toISOString()
    .substr(11, 8)
    .split`:`
    .map((t, i) => pluralization(+t, sufix[i + 2]));
  
  return y + join(y, d, h) + join(d, h, m) + join(h, m, s) + join(m, s, false) || 'now';
}
