// #1
// fn xo(string: &'static str) -> bool {
//     let mut equal = 0;
//     for c in string.to_lowercase().chars() {
//         equal += match c {
//             'x' => 1,
//             'o' => -1,
//             _ => 0,
//         }
//     }
//     equal == 0
// }
// #2
fn xo(string: &'static str) -> bool {
    string.to_lowercase().chars().fold(0, |a, c| match c {
        'x' => a + 1,
        'o' => a - 1,
        _ => a,
    }) == 0
}
