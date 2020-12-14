// #1
public class Bio {
  public String dnaToRna(String dna) {
    String res = "";
    for (int i = 0; i < dna.length(); i++) {
      char c = dna.charAt(i);
      if (c == 'T') {
        res += "U";
      } else {
        res += c;
      }
    }
    return res;
  } 
}

// #2
public class Bio {
  public String dnaToRna(String dna) {
    String res = "";
    for (char c: dna.toCharArray()) {
      res += (c == 'T') ? "U" : c;
    }
    return res;
  } 
}

// #3
public class Bio {
  public String dnaToRna(String dna) {
    return dna.replaceAll("T", "U");
  } 
}
