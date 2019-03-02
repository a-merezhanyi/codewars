#include <iostream>
#include <string>

using namespace std;

bool solution(std::string const &str, std::string const &ending)
{
    if (str.length() >= ending.length())
    {
        return (0 == str.compare(str.length() - ending.length(), ending.length(), ending));
    }
    else
    {
        return false;
    }
}