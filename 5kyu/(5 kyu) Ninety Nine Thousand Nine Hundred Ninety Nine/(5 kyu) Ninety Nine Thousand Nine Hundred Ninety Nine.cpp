#include <string>
#include <vector>

std::string numberToEnglish(unsigned int n)
{
    if (n < 0 || n > 99999 || n % 1 != 0)
    {
        return "";
    }
    if (n < 20)
    {
        return std::vector<std::string>{
            "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
            "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"}[n];
    }
    if (n < 100)
    {
        return std::vector<std::string>{
                   "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"}[(n - 20) / 10] +
               (n % 10 ? " " + numberToEnglish(n % 10) : "");
    }
    if (n < 1000)
    {
        return numberToEnglish(n / 100) + " hundred" + (n % 100 ? " " + numberToEnglish(n % 100) : "");
    }
    return numberToEnglish(n / 1000) + " thousand" + (n % 1000 ? " " + numberToEnglish(n % 1000) : "");
}