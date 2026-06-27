// 1 Simple solutoin
String countSheep(numb) {
  var result = '';

  for (var i = 1; i <= numb; i++) {
    result += '$i sheep...';
  }

  return result;
}

// 2 Optimized solution
String countSheep(int numb) {
  return List.generate(numb, (i) => '${i + 1} sheep...').join();
}

// 3 Coding golf
String countSheep(int n) => List.generate(n, (i) => '${i + 1} sheep...').join();
