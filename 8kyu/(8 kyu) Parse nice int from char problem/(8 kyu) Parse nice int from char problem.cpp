#include <string>

// 1 Simple solution
int get_age(const std::string& she_said) {
    char age_char = she_said[0];
    int age = age_char - '0';

    return age;
}

// 2 Optimized solution
int get_age(const std::string& she_said) {
    return she_said[0] - '0';
}

// 3 Clever solution
using namespace std;

int get_age(const string& she_said) {
    return stoi(she_said);
}
