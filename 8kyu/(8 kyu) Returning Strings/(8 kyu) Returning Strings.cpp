// 1 Plain solution
#include <string>

std::string greet(const std::string& n){
  std::string str1 = "Hello, ";
  std::string str2 = " how are you doing today?";

  return str1 + n + str2;
}

// 2 Optimized solution
#include <string>

std::string greet(const std::string& n){
  return "Hello, " + n + " how are you doing today?";
}

// 3 Clever solution
#include <fmt/format.h>

std::string greet( const std::string& name ) {
  return fmt::format( "Hello, {} how are you doing today?", name );
}