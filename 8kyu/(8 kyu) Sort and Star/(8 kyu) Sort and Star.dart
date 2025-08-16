// 1 Simple solution
String twoSort(List<String> arr) {
  int size = arr.length;
  String result = "";
  for (int i = 0; i < size - 1; i++) {
    for (int j = i + 1; j < arr.length; j++) {
      if (arr[i].compareTo(arr[j]) > 0) {
        String temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  String word = arr[0];
  int length = word.length - 1;
  for (int i = 0; i < length; i++) {
    result += word[i] + "***";
  }
  return result + word[length];
}

// 2 Optimized solution
String twoSort(List<String> arr) {
  arr.sort();
  String word = arr[0];
  return word.split('').join('***');
}

// 3 Clever solution
String twoSort(List<String> arr) => (arr..sort()).first.split('').join('***');

// 4 Coding golf
String twoSort(List<String> a) => (a..sort())[0].split('').join('***');
