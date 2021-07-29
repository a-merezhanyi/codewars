#include <string>
#include <bits/stdc++.h>
using namespace std;

string reverse_words(const string& str) {
  string res = "";
  string word = "";
  for (auto w: str)
  {
    if (w == ' ')
    {
      res = word + " " + res;
      word = "";
    }
    else {
      word = word + w;
    }
  }
  if (!word.empty()) res = word + " " + res;
  if (!res.empty()) res.pop_back();
  
  return res;
}
