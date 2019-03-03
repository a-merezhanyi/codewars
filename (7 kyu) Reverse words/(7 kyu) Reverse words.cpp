#include <iostream>
#include <string>

using namespace std;

std::string reverse_words(std::string str)
{
    std::string res;
    std::string word;
    int length = str.length();
    for (int i = 0; i < length; i++)
    {
        if (str[i] != ' ')
        {
            word = str[i] + word;
        }
        else
        {
            if (word.length() > 0)
            {
                res += word;
                word = "";
            }
            res += " ";
        }
    }
    return res + word;
}