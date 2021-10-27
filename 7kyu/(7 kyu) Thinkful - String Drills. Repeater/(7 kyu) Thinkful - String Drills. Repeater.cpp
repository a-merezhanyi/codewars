#include <iostream>
#include <string>

using namespace std;

std::string repeater(std::string str, int n)
{
    std::string res;
    for (int i = 0; i < n; i++)
        res += str;
    return res;
}