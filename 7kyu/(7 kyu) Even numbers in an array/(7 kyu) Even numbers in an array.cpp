#include <vector>

using namespace std;

std::vector<int> evenNumbers(vector<int> arr, int n)
{
    vector<int> result;

    for (auto x : arr)
        if (x % 2 == 0)
            result.push_back(x);

    return vector<int>(result.end() - n, result.end());
}