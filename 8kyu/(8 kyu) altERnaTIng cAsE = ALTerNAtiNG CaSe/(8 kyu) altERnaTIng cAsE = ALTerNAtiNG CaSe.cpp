#include <iostream>
#include <cctype>

std::string to_alternating_case(const std::string &str)
{
    std::string ret = str;
    for (char &c : ret)
    {
        c = isupper(c) ? tolower(c) : toupper(c);
    }
    return ret;
}