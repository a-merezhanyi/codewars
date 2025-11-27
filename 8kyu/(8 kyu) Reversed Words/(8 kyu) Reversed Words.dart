// 1 Simple solution
String reverseWords(String str) {
  final words = str.split(' ');
  String res = '';
  for (int i = words.length - 1; i >= 0; i--) {
    res += words[i] + ' ';
  }
  return res.trim();
}

// 2 Optimized solution
String reverseWords(String str) {
  final words = str.split(' ');
  final reversedWords = words.reversed;
  return reversedWords.join(' ').trim();
}

// 3 Clever solution
String reverseWords(String str) => str.split(' ').reversed.join(' ').trim();

// 4 Coding golf
reverseWords(s) => s.split(' ').reversed.join(' ');
