#include <iostream>
#include <string>

using namespace std;

std::string generate_shape(int n)
{
    std::string res;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
            res += "+";
        if (i < n - 1)
            res += "\n";
    }
    return res;
}