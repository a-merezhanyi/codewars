// 1 Simple solution
pub fn remove_char(s: &str) -> String {
    let mut res = Vec::new();
    for (i, c) in s.chars().enumerate() {
        if i != 0 && i != s.len() - 1 {
            res.push(c);
        }
    }
    String::from_iter(res)
}

// 2 Optimized solution
pub fn remove_char(s: &str) -> String {
    s.chars().skip(1).take(s.len() - 2).collect()
}

// 3 Clever solution
pub fn remove_char(s: &str) -> String {
    s[1..s.len() - 1].to_string()
}
