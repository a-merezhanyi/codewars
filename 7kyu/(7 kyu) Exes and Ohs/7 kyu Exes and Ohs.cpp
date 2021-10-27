#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

bool XO(const std::string &str)
{
    string res = "";
    for (int i = 0; i < str.length(); i++)
        res += tolower(str[i]);
    int x = std::count(res.begin(), res.end(), 'x');
    int o = std::count(res.begin(), res.end(), 'o');
    return x == o;
}