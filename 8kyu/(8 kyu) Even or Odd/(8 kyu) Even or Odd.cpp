#include <string>

std::string even_or_odd(int number)
{
    return (number % 2)
               ? "Odd"
               : "Even";
}