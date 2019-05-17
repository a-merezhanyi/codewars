#include <regex>
#include <string>
#include <vector>

class SalesmanTravel
{
public:
    static std::string travel(const std::string &orgr, std::string zipcode)
    {
        std::vector<std::string> fullAddresses;
        auto it = std::find(orgr.begin(), orgr.end(), ',');
        auto prevIt = orgr.begin();
        do
        {
            fullAddresses.emplace_back(prevIt, it);
            prevIt = ++it;
            it = std::find(it, orgr.end(), ',');
        } while (it != orgr.end());

        std::string numbers;
        std::string addresses;
        std::regex zipcodeRegex("(\\d+)\\s(.+)\\s+" + zipcode + "$");
        std::smatch match;
        for (auto &&fullAddress : fullAddresses)
        {
            if (std::regex_match(fullAddress, match, zipcodeRegex) &&
                match.size() == 3)
            {
                addresses += (addresses.empty() ? "" : ",") + std::string(match[2]);
                numbers += (numbers.empty() ? "" : ",") + std::string(match[1]);
            }
        }

        return zipcode + ":" + addresses + "/" + numbers;
    }
};