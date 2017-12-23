const isValidIP = str => {
  const ip = str.split`.`;
  
  if (
    ip.length !== 4 ||
    ip.filter(
      x => x > 255 || !+x && x !== '0' ||
      x.trim().length !== x.length ||
      x[0] === '0' && x !== '0'
    ).length
  ) return false;
  
  return true;
}
