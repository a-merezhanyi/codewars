fn reverse_words(str: &str) -> String {
    let words = str.split(" ").collect::<Vec<_>>();
    let mut res = "".to_string();
    for w in words {
        let mut x = w.to_string();
        x += " ";
        x = x.chars().rev().collect();
        res.push_str(&x);
    }
    res[1..].to_string()
}
