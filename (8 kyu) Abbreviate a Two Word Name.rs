/// Abbreviate a Two Word Name (8 kyu)
/// https://www.codewars.com/kata/abbreviate-a-two-word-name
/// Write a function to convert a name into initials. This kata strictly
/// takes two words with one space in between them.
/// The output should be two capital letters with a dot seperating them.
/// It should look like this:
/// Sam Harris => S.H
/// Patrick Feeney => P.F
fn abbrev_name(name: &str) -> String {
    let mut result = String::new();
    let arr: Vec<&str> = name.split_whitespace().collect();

    result.push_str(&arr[0][..1].to_uppercase());
    result.push_str(".");
    result.push_str(&arr[1][..1].to_uppercase());

    result
}
