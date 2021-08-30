package kata

func DNAStrand(dna string) string {
  var dict = map[string]string{
    "A": "T", "T": "A", "C": "G", "G": "C",
  }
  res := ""
  
  for _, v := range dna {
    res = res + dict[string(v)]
  }
  
  return res
}
