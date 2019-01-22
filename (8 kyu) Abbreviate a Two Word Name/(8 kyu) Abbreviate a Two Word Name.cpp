#include <iostream>
#include <cctype>

std::string abbrevName(std::string name)
{
    // #1
    // size_t pos = name.find(" ");
    // char first_name = std::toupper(name[0]);
    // char last_name = std::toupper(name[pos + 1]);

    // std::string abr;
    // abr += first_name;
    // abr += ".";
    // abr += last_name;

    // return abr;

    // #2
    // std::string ret;
    // ret.push_back(toupper(name[0]));
    // ret.push_back('.');
    // ret.push_back(toupper(name[name.find(' ') + 1]));
    // return ret;

    // #3
    // std::string first_initial{toupper(name[0])};
    // std::string second_initial{toupper(name[name.find_last_of(' ') + 1])};
    // return first_initial + "." + second_initial;

    // #4
    return {toupper(name[0]), '.', toupper(name[name.find_last_of(' ') + 1])};
}