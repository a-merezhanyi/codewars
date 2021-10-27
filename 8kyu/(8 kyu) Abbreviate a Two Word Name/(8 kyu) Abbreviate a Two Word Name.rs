fn abbrev_name(name: &str) -> String {
    let mut result = String::new();
    let arr: Vec<&str> = name.split_whitespace().collect();

    result.push_str(&arr[0][..1].to_uppercase());
    result.push_str(".");
    result.push_str(&arr[1][..1].to_uppercase());

    result
}
