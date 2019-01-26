#include <vector>

std::vector<int> reverseSeq(int n)
{
    std::vector<int> res;
    for (int32_t i = n; i > 0; --i)
    {
        res.push_back(i);
    }
    return res;
}