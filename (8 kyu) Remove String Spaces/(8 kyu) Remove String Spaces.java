// #1
// class Kata {
//   static String noSpace(final String x) {
//     String res = "";
//     for (int i = 0; i < x.length(); i++) {
//       if (x.charAt(i) != ' ') {
//         res += x.charAt(i);
//       }
//     }
//     return res;
//   }
// }

// #2
//class Kata {
//   static String noSpace(final String x) {
//     String res = "";
//     for (char c: x.toCharArray()) {
//       if (c != ' ') {
//         res += c;
//       }
//     }
//     return res;
//   }
// }

// #3
class Kata {
  static String noSpace(final String x) {
    return x.replaceAll("\\s+", "");
  }
}
