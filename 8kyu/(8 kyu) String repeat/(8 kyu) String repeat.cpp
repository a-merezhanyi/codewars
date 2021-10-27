#include <sstream>

std::string repeat_str(int32_t n, std::string s)
{
    std::stringstream ss;
    for (int32_t i = 0; i < n; ++i)
    {
        ss << s;
    }
    return ss.str();
}