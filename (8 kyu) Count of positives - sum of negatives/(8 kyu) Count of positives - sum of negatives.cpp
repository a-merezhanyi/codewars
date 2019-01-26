#include <vector>

// #1
// std::vector<int> countPositivesSumNegatives(std::vector<int> input)
// {
//     if (input.size() == 0)
//         return {};
//     std::vector<int> result(2);
//     for (auto x : input)
//     {
//         if (x > 0)
//             result[0]++;
//         if (x < 0)
//             result[1] += x;
//     }
//     return result;
// }

// #2
std::vector<int> countPositivesSumNegatives(std::vector<int> input)
{
    if (input.empty())
        return {};
    int countPositives{0}, sumNegatives{0};
    for (int x : input)
        x > 0 ? countPositives++ : (x != 0 ? sumNegatives += x : 0);
    return {countPositives, sumNegatives};
}