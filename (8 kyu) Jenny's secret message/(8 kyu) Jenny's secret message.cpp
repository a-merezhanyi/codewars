#include <string>

// #1
// std::string greet(std::string name)
// {
//     return (name == "Johnny")
//                ? "Hello, my love!"
//                : "Hello, " + name + "!";
// }
// #2
std::string greet(std::string name)
{
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}