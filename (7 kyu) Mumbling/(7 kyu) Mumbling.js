function accum(s) {
  return s
    .split('')
    .map(
      (el, i) =>
        /^[a-zA-Z]$/ ? el.toUpperCase() + el.repeat(i).toLowerCase() : '',
    )
    .join('-');
}
