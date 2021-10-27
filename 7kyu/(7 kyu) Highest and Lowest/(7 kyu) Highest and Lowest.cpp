#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
#include <sstream>

using namespace std;

std::string highAndLow(const std::string &numbers)
{
    std::vector<int> v;
    std::stringstream ss(numbers);
    std::string x;
    while (ss >> x)
        v.push_back(std::stoi(x));
    auto result = std::minmax_element(v.begin(), v.end());
    int low = result.first - v.begin();
    int high = result.second - v.begin();
    return std::to_string(v[high]) + " " + std::to_string(v[low]);
}