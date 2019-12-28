#include <string>
#include <algorithm>
#include <numeric>
#include <math.h>

class RevRot
{
public:
    static std::string revRot(const std::string &strng, unsigned int sz)
    {
      if (sz == 0) { return ""; }
      std::string res = strng.substr(0, strng.size() / sz * sz);
  
      for (int i = 0; i < res.size(); i += sz)
      {
        auto begin = std::next(res.begin(), i);
        auto end   = std::next(res.begin(), i + sz);
        int sum = std::accumulate(begin, end, 0, RevRot::acc);
        if (sum % 2) { std::rotate(begin, begin + 1, end); }
        else { std::reverse(begin, end); }
      }
  
      return res;
    }
    
private:
    static int acc(int total, char &charNum)
    {
        return total + pow( static_cast<int>(charNum - 48), 3 );
    }
};
