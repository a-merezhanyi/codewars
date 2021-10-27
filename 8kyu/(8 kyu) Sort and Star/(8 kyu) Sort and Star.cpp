#include <string>
#include <vector>
#include <algorithm>

std::string twoSort(std::vector<std::string> s)
{
    std::sort(s.begin(), s.end());
    std::string ret;
    std::string word = s[0];
    for (int32_t i = 0; i < word.length() - 1; ++i)
    {
        ret = ret + word[i] + "***";
    }
    return ret + word.back();
}