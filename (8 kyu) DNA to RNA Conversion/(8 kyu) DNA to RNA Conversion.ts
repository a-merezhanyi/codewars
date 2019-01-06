export function DNAtoRNA(dna: string): string {
  return dna.replace(/T/g, 'U');
}
