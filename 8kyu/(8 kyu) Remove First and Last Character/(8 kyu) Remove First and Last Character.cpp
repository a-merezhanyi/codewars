#include <string>

using namespace std;

// 1 Simple solution
string sliceString (string str )
{
  string result = "";
    for ( int i = 1 ; i < str.length() - 1 ; i++ )
    {
      result += str[i] ;
    }
  return result ;
}

// 2 Optimized solution
string sliceString (string str )
{
  if ( str.length() <= 2 ) return "";
  return str.substr(1, str.length() - 2);
}

// 3 Coding golf
string sliceString (string str ) {
  return str.substr(1, str.length() - 2);
}