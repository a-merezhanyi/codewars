#include <string>

bool feast(std::string beast, std::string dish)
{
    return beast.front() == dish.front() && beast.back() == dish.back();
}