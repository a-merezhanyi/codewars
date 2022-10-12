// 1 Plain solution
function containAllRots(strng, arr) {
  if (!strng.length) {
    return true;
  }

  const rotations = [];
  const strCopy = [...strng];
  for (let i = 0; i < strng.length; i++) {
    const l = strCopy.shift();
    const candidate = [l, ...strCopy].join("");
    strCopy.push(l);
    if (!rotations.includes(candidate)) {
      rotations.push(candidate);
    }
  }
  const res = arr.filter((s) => rotations.includes(s));

  return res.length === rotations.length;
}

// 2 Optimized solution
function containAllRots(strng, arr) {
  function rotate(s) {
    return s.substring(1) + s[0];
  }

  for (let i = 0, l = strng.length; i < l; ++i) {
    if (arr.indexOf(strng) === -1) {
      return false;
    }
    strng = rotate(strng);
  }
  return true;
}

// 3 Clever solution
function containAllRots(strng, arr) {
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
      return false;
    }
  }
  return true;
}
