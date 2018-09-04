const DNAStrand = (dna) => {
  return dna
    .replace(/A/g, 't')
    .replace(/T/g, 'a')
    .replace(/C/g, 'g')
    .replace(/G/g, 'c')
    .toUpperCase();
};
