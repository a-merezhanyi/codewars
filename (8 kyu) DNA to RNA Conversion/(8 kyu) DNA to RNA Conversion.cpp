#include <string>
#include <regex>

// #1
// std::string DNAtoRNA(std::string dna)
// {
//     std::regex e("T");
//     std::string result;
//     std::regex_replace(std::back_inserter(result),
//                        dna.begin(), dna.end(), e, "U");
//     return result;
// }

// #2
std::string DNAtoRNA(std::string dna)
{
    std::replace(dna.begin(), dna.end(), 'T', 'U');
    return dna;
}