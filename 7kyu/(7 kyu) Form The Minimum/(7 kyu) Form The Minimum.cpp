#include <vector>
#include <set>

unsigned long long minValue(const std::vector<int>& v) {
  std::set<int> s (v.begin(), v.end());
  unsigned long long result = 0;
  for (std::set<int>::iterator i = s.begin(); i != s.end(); i++)
    result = 10 * result + *i;
  return result;
}
