// #1
// fn longest(a1: &str, a2: &str) -> String {
//     let s = format!("{}{}", a1, a2);
//     let mut v = s.chars().collect::<Vec<char>>();
//     v.sort();
//     let mut res = String::new();
//     for c in v.iter() {
//         if !res.contains(&c.to_string()) {
//             res.push(*c);
//         }
//     }
//     res.to_string()
// }
// #2
fn longest(a1: &str, a2: &str) -> String {
    let mut s = format!("{}{}", a1, a2).chars().collect::<Vec<char>>();
    s.sort();
    s.dedup();
    s.into_iter().collect()
}
