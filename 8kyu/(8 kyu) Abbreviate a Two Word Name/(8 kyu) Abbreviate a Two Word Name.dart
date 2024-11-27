// 1 Plain solution
String abbrevName(String name) {
  List<String> names = name.split(' ');
  String firstName = names[0][0];
  String lastName = names[1][0];

  return '${firstName.toUpperCase()}.${lastName.toUpperCase()}';
}

// 2 Optimized solution
String abbrevName(String name) {
  List<String> names = name.split(' ');

  return '${names[0][0].toUpperCase()}.${names[1][0].toUpperCase()}';
}

// 3 Clever solution
String abbrevName(String name) {
  return name.split(' ').map((e) => e[0].toUpperCase()).join('.');
}

// 4 Coding golf
String abbrevName(String n) =>
    n.split(' ').map((e) => e[0].toUpperCase()).join('.');
