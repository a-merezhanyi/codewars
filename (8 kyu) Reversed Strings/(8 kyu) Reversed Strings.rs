/// Reversed Strings (8 kyu)
/// https://www.codewars.com/kata/reversed-strings
/// Complete the solution so that it reverses the string value passed
/// into it.
/// solution("world") // returns "dlrow"
fn solution(phrase: &str) -> String {
    // #1
    // phrase.chars().rev().collect::<String>()
    // #2
    phrase.chars().rev().collect()
}
