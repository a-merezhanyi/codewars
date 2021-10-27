#include <algorithm>

long long int maxNumber(long long int n)
{
    auto str = std::to_string(n);
    std::sort(str.begin(), str.end(), std::greater<>());
    return std::stoll(str);
}
