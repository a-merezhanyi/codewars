#include <vector>
using namespace std;

// #1
// int count_sheep(vector<bool> arr)
// {
//     int res = 0;
//     for (auto i : arr)
//     {
//         if (i)
//             res++;
//     }
//     return res;
// }

// #2
#include <algorithm>
int count_sheep(std::vector<bool> arr)
{
    return std::count(arr.begin(), arr.end(), true);
}