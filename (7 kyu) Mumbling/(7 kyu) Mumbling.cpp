#include <string>
#include <cctype>

class Accumul
{
  public:
    static std::string accum(const std::string &s)
    {
        std::string res;
        for (int i = 0; i < s.length(); i++)
        {
            std::string word;
            for (int j = 0; j <= i; j++)
                if (j == 0)
                    word += std::toupper(s[i]);
                else
                    word += std::tolower(s[i]);
            res += word;
            if (i < s.length() - 1)
                res += "-";
        }
        return res;
    }
};