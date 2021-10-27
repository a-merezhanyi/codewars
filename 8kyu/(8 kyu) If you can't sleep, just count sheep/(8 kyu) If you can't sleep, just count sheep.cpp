#include <string>
using namespace std;

string countSheep(int number)
{
    string ret = "";
    for (int i = 1; i <= number; i++)
    {
        ret += (to_string(i) + " sheep...");
    }
    return ret;
};