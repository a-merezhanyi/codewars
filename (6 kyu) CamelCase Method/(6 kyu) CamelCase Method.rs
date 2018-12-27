fn camel_case(str: &str) -> String {
    str.split_whitespace()
        .collect::<Vec<_>>()
        .iter()
        .map(|&s| [&s[..1].to_uppercase(), &s[1..]].join(""))
        .collect::<Vec<_>>()
        .join("")
}
