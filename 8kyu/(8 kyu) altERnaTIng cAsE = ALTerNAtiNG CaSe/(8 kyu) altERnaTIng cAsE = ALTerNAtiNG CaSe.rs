// #1
fn to_alternating_case(s: &str) -> String {
    let mut result = String::new();
    for (i, c) in s.chars().enumerate() {
        if c.is_lowercase() {
            let x = c.to_string().to_uppercase().to_owned();
            result.push_str(&x);
        } else if c.is_uppercase() {
            let x = c.to_string().to_lowercase().to_owned();
            result.push_str(&x);
        } else {
            result.push(c);
        }
    }
    return result;
}

// #2
fn to_alternating_case(s: &str) -> String {
    let mut result = String::new();
    for c in s.chars() {
        if c.is_lowercase() {
            result.extend(c.to_uppercase());
        } else {
            result.extend(c.to_lowercase());
        }
    }
    result
}

// #3
fn to_alternating_case(s: &str) -> String {
    s.chars()
        .filter_map(|c| {
            if c.is_lowercase() {
                c.to_uppercase().next()
            } else {
                c.to_lowercase().next()
            }
        })
        .collect()
}
