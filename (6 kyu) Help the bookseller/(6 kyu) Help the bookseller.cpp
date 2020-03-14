#include <unordered_map>
#include <sstream>
#include <vector>

class StockList
{
public:
 
  static std::string stockSummary(std::vector<std::string> lstOfArt, std::vector<std::string> categories)
  {
    std::unordered_map<std::string, int> qtys;
    if(lstOfArt.size() == 0 || categories.size() == 0)
      return "";

    for( auto i : categories )
      qtys[i] = 0;

    for ( auto i : lstOfArt )
    {
      std::istringstream iss{i};
      std::string cat;
      int qty;
      iss >> cat >> qty;
      if ( qtys.count(cat.substr(0,1)) != 0 )
        qtys[cat.substr(0,1)] += qty;
    }

    std::ostringstream oss;
    for ( auto i : categories )
      {
        oss << '(' << i << " : " << qtys[i] << ")";
        if ( i != categories.at(categories.size() - 1) ) 
          oss << " - ";
      }
    return oss.str();
  }
};
