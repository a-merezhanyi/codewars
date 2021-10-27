#include <string>

// #1
// #include <algorithm>
// std::string no_space(std::string x)
// {
//     x.erase(std::remove(x.begin(), x.end(), ' '), x.end());
//     return x;
// }

// #2
#include <regex>
std::string no_space(std::string s)
{
    return std::regex_replace(s, std::regex(" "), "");
}