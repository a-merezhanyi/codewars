const solution = (list, i = 0, j = 1) => {
  let [curr, prev, arr] = [list[0], '', []];
  
  while (j <= list.length) {
    if (list[j] - list[j-1] !== 1 || j++ === list.length) {
      j > 1 && (prev = `${list[i]}-`);
      list[j-1] - list[i] === 1 && (prev = `${list[i]},`);
      list[j-1] === list[i] && (prev = '');
      
      arr.push(`${prev}${list[j-1]}`);
      prev = list[i = j++];
    }
  }
  
  return arr.join`,`;
}
