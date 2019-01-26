#include <vector>
#include <algorithm>
using namespace std;

// #1
// int findSmallest(vector<int> list)
// {
//     sort(list.begin(), list.end());
//     return list[0];
// }

// #2
int findSmallest(vector<int> list)
{
    return *std::min_element(list.begin(), list.end());
}