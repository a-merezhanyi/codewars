#include <string>
#include <cctype>

// #1
// class Accumul
// {
//   public:
//     static std::string accum(const std::string &s)
//     {
//         std::string res;
//         for (int i = 0; i < s.length(); i++)
//         {
//             std::string word;
//             for (int j = 0; j <= i; j++)
//                 if (j == 0)
//                     word += std::toupper(s[i]);
//                 else
//                     word += std::tolower(s[i]);
//             res += word;
//             if (i < s.length() - 1)
//                 res += "-";
//         }
//         return res;
//     }
// };

// #2
class Accumul
{
  public:
    static std::string accum(const std::string &s)
    {
        std::string result;
        for (int i = 0; i < s.length(); i++)
        {
            result.append("-");
            result.append(std::string(1, toupper(s[i])));
            result.append(std::string(i, tolower(s[i])));
        }
        return result.substr(1, result.length());
    }
};