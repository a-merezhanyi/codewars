#include <iostream>
#include <cctype>

std::string abbrevName(std::string name)
{
    // #1
    // size_t pos = name.find(" ");
    // char first_initial = std::toupper(name[0]);
    // char second_initial = std::toupper(name[pos + 1]);

    // std::string abbr;
    // abbr += first_initial;
    // abbr += ".";
    // abbr += second_initial;

    // return abbr;

    // #2
    // std::string abbr;
    // abbr.push_back(toupper(name[0]));
    // abbr.push_back('.');
    // abbr.push_back(toupper(name[name.find(' ') + 1]));
    // return abbr;

    // #3
    // std::string abbr = "";
    // abbr += toupper(name[0]);
    // abbr += '.';
    // abbr += toupper(name[name.find(' ') + 1]);
    // return abbr;

    // #4
    // std::string first_initial{toupper(name[0])};
    // std::string second_initial{toupper(name[name.find_last_of(' ') + 1])};
    // return first_initial + "." + second_initial;

    // #5
    return {toupper(name[0]), '.', toupper(name[name.find_last_of(' ') + 1])};
}