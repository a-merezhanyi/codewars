#include <string>
#include <map>

std::string removeDuplicateWords(const std::string &str)
{
    std::string result, word;
    std::map<std::string, bool> words;

    auto output = [&]() {
        if ((word.size() > 0) && (!words[word]))
        {
            result.append(((result.size() > 0) ? " " : "") + word);
        }
    };

    for (auto c : str)
    {
        if (c == ' ')
        {
            output();
            words[word] = true;
            word = "";
        }
        else
        {
            word.push_back(c);
        }
    }
    output();

    return std::move(result);
}