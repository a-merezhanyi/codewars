export class Kata {
  static dnaStrand(dna: string) {
    return dna
      .replace(/A/g, 't')
      .replace(/T/g, 'a')
      .replace(/C/g, 'g')
      .replace(/G/g, 'c')
      .toUpperCase();
  }
}
