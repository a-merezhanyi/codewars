#include <vector>

std::vector<int> between(int start, int end) {
  std::vector<int> res;

  for (int i = start; i <= end; i++) {
    res.push_back(i);
  }
  
  return res;
}
