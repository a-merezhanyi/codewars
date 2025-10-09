#include <vector>
#include <cstdint>

// 1 Simple solution
std::vector<uint64_t> powers_of_two(int n) {
    std::vector<uint64_t> result;
    result.reserve(n + 1);
    for (int i = 0; i <= n; ++i) {
        result.push_back(static_cast<uint64_t>(1) << i);
    }
    return result;
}

// 2 Optimized solution
std::vector<uint64_t> powers_of_two(int n) {
    std::vector<uint64_t> result(n + 1);
    for (int i = 0; i <= n; ++i) {
        result[i] = 1ULL << i;
    }
    return result;
}

// 3 Clever solution
#include <algorithm>
#include <iterator>
#include <numeric>
std::vector<uint64_t> powers_of_two(int n) {
    std::vector<uint64_t> result(n + 1);
    std::iota(result.begin(), result.end(), 0);
    std::transform(result.begin(), result.end(), result.begin(),
                   [](int i) { return 1ULL << i; });
    return result;
}