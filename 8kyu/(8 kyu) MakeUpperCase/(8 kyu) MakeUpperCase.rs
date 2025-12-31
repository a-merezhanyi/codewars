// 1 Simple solution
fn make_upper_case(s: &str) -> String {
    let mut result = String::new();
    for c in s.chars() {
        if c >= 'a' && c <= 'z' {
            result.push(((c as u8) - 32) as char);
        } else {
            result.push(c);
        }
    }
    result
}

// 2 Optimized solution
fn make_upper_case(s: &str) -> String {
    s.chars()
        .map(|c| if c.is_ascii_lowercase() { ((c as u8) - 32) as char } else { c })
        .collect()
}

// 3 Clever solution
fn make_upper_case(s: &str) -> String {
    s.to_ascii_uppercase()
}

// 4 Coding golf
static make_upper_case: fn(&str) -> String = str::to_uppercase;
