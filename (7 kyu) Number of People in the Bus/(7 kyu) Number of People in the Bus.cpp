#include <vector>

// #1
// unsigned int number(const std::vector<std::pair<int, int>> &busStops)
// {
//     int total_people = 0;
//     for (int i = 0; i < busStops.size(); i++)
//     {
//         total_people += busStops[i].first;
//         total_people -= busStops[i].second;
//     }
//     return total_people;
// }

//#2
unsigned int number(const std::vector<std::pair<int, int>> &busStops)
{
    int passengers = 0;
    for (auto i : busStops)
        passengers += i.first - i.second;
    return passengers;
}