// 1 Plain solution
String well(List<String> x) {
  int goodIdeas = 0;

  for(var idea in x) {
    if (idea == 'good') {
      goodIdeas += 1;
    }
  }

  if (goodIdeas == 0) {
    return 'Fail!';
  } else if (goodIdeas > 0 && goodIdeas < 3) {
    return 'Publish!';
  } else {
    return 'I smell a series!';
  }
}

// 2 Optimized solution
String well(List<String> x) {
  switch (x.where((xs) => xs == 'good').length) {
    case 0: return 'Fail!';
    case 1:
    case 2: return 'Publish!';
    default: return 'I smell a series!';
  }
}

// 3 Clever solution
String well(List<String> x) {
  var n = x.where((x)=> x == 'good').length;

  return n > 2 ? 'I smell a series!' : n > 0 ? 'Publish!' : 'Fail!';
}
