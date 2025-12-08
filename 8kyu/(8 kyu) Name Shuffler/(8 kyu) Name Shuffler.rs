// 1 Plain solution
fn name_shuffler(s: &str) -> String {
    let space_index = s.find(' ').unwrap();
    let first_name = &s[..space_index];
    let last_name = &s[space_index + 1..];

    format!("{} {}", last_name, first_name)
}

// 2 Optimized solution
fn name_shuffler_optimized(s: &str) -> String {
    let mut name = s.find(' ').unwrap();
    format!("{} {}", &s[name + 1..], &s[..name])
}

// 3 Clever solution
fn name_shuffler_clever(s: &str) -> String {
    s.split_whitespace().rev().collect::<Vec<&str>>().join(" ")
}