#include <iostream>
#include <string>

using namespace std;

std::string get_middle(std::string input)
{
    int middle = input.length() / 2;
    string res = "";
    if (input.length() % 2 == 0)
        res += input[middle - 1];
    res += input[middle];
    return res;
}