// #1
#include <vector>

int findOdd(const std::vector<int>& numbers){
  for(unsigned int i=0; i<numbers.size(); ++i)
  {
    unsigned int digits=0;
    for(unsigned int j=0; j<numbers.size(); ++j){
       if(numbers[i]==numbers[j]){
           digits++;
       }
    }
    if(digits%2==1){
        return numbers[i];
         break;
    }
  }
}
// #2
#include <functional>
#include <numeric>
#include <vector>

int findOdd(const std::vector<int>& numbers) {
  return std::accumulate(numbers.cbegin(), numbers.cend(), 0, std::bit_xor<>());
}
