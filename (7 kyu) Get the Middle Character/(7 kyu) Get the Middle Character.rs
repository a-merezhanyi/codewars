fn get_middle(s: &str) -> &str {
    // #1
    // let even = s.len() % 2 == 0;
    // let middle = s.len() / 2;
    // &s[if even { middle - 1 } else { middle }..middle + 1]
    // #2
    s[(s.len() - 1) / 2..s.len() / 2 + 1]
}
