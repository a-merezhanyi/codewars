#include <iostream>
#include <string>
#include <vector>
#include <sstream>

using namespace std;

int find_short(std::string str)
{
    std::vector<std::string> array;
    std::stringstream ss(str);
    std::string x;
    while (ss >> x)
    {
        array.push_back(x);
    }
    int length = array.size();
    int min = 1000;
    for (int i = 0; i < length; i++)
    {
        if (array[i].length() < min)
        {
            min = array[i].length();
        }
    }
    return min;
}