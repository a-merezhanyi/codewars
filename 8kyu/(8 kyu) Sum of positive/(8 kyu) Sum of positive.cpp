#include <vector>

int positive_sum(std::vector<int> arr) {
  int res = 0;
  for (int x : arr) {
    res += x > 0 ? x : 0;
  }
  return res;
}
