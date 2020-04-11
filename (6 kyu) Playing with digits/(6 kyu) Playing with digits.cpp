#include <string>     // std::string
#include <math.h>     // pow

class DigPow
{
public:
  static int digPow(int n, int p)
  {
    std::string str = std::to_string(n);
    int res = 0;
    
    for(char& c: str)
    {
      res += pow((int)(c) - 48, p++);
    }
  
    return res % n == 0 ? res / n : -1;
  }
};
