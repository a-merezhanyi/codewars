#include <string>
#include <sstream>
#include <cctype>

using namespace std;

string jadenCase(string input)
{
    stringstream result;

    while (input.find(" ") != string::npos)
    {
        string word = input.substr(0, input.find(" "));
        result << (char)toupper(word.at(0));
        result << word.substr(1) << " ";

        input = input.substr(input.find(" ") + 1);
    }

    // The rest of the string
    if (!input.empty())
    {
        result << (char)toupper(input.at(0));
        result << input.substr(1);
    }

    return result.str();
}