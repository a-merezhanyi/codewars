#include <iostream>
#include <algorithm>
using namespace std;

class TwoToOne
{
  public:
    static string longest(const string &s1, const string &s2)
    {
        string word = s1 + s2;
        sort(word.begin(), word.end());
        auto ip = unique(word.begin(), word.end());
        return string(word.begin(), ip);
    };
};