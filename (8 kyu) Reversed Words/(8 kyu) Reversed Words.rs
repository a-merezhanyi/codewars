// #1
// fn reverse_words(str: &str) -> String {
//     let s = str.split_whitespace().rev();
//     let res: Vec<&str> = s.collect();
//     res.join(" ")
// }
// #2
fn reverse_words(s: &str) -> String {
    s.split_whitespace().rev().collect::<Vec<_>>().join(" ")
}
