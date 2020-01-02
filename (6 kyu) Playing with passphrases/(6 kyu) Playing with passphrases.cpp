#include <string>
#include <algorithm>
using namespace std;

class PlayPass {
 public:
  static string playPass(const string &s, int n);
};

string PlayPass::playPass(const string &s, int n) {
  string res;
  for (int i = 0, a; i < s.size(); i++) {
    a = s[i];
    if (isdigit(a)) {
      res += (105 - a);
    } else if (isalpha(a)) {
      char x = (a + n - 65) % 26 + 65;
      res += i % 2 == 1 ? tolower(x) : x;
    } else
      res += a;
  }
  reverse(res.begin(), res.end());
  return res;
}
