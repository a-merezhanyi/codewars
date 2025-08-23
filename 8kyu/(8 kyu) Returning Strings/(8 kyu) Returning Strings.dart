// 1 Plain solution
String greet(String name) {
  final String str1 = "Hello, ";
  final String str2 = " how are you doing today?";

  return str1 + name + str2;
}

// 2 Optimized solution
String greet(String name) {
  return "Hello, " + name + " how are you doing today?";
}

// 3 Clever solution
String greet(String name) {
  return "Hello, $name how are you doing today?";
}

// 4 Coding golf
greet(n) => "Hello, $n how are you doing today?";
