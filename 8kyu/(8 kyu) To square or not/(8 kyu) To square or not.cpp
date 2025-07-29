#include <vector>
#include <cmath>

std::vector<int> squareOrSquareRoot(const std::vector<int>& array)
{
    std::vector<int> result;
    for (int num : array) {
        int root = static_cast<int>(std::sqrt(num));
        if (root * root == num) {
            result.push_back(root);
        } else {
            result.push_back(num * num);
        }
    }
    return result;
}