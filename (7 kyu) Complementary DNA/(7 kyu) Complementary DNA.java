public class DnaStrand {
  public static String makeComplement(String dna) {
    return dna
      .replaceAll("A", "t")
      .replaceAll("T", "a")
      .replaceAll("C", "g")
      .replaceAll("G", "c")
      .toUpperCase();
  }
}
