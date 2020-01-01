#include <sstream>
#include <iomanip>

class RGBToHex
{
  static inline std::string decToHex(int c)
  {
    if (c < 0) return "00";
    else if (c > 255) return "FF";
    std::ostringstream oss;
    oss << std::uppercase << std::setfill('0') << std::hex
        << std::setw(2) << c;
    return oss.str();
  }
  
  public:
  static std::string rgb(int r, int g, int b)
  {
    return decToHex(r) + decToHex(g) + decToHex(b);
  }
};
