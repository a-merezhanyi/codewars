package kata

import "strings"

func DNAtoRNA(dna string) string {
  return strings.Replace(dna, "T", "U", -1)
}
