// #1
// #include <string>
// using namespace std;

// std::string DNAStrand(const std::string& dna)
// {
//   string res = "";
//   for(int i = 0; i < dna.length(); i++)
//   {
//     if (dna[i] == 'T') res += 'A';
//     if (dna[i] == 'A') res += 'T';
//     if (dna[i] == 'G') res += 'C';
//     if (dna[i] == 'C') res += 'G';
//   }
//   return res;
// }

// #2
#include <string>
#include <unordered_map>

std::unordered_map<char, char> pairs = {{'A', 'T'}, {'T', 'A'}, {'C', 'G'}, {'G', 'C'}};

std::string DNAStrand(const std::string &dna)
{
    std::string complement;
    for (const char &c : dna)
    {
        complement += pairs[c];
    }
    return complement;
}