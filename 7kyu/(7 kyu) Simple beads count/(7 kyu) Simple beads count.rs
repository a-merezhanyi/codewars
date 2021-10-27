// #1
// fn count_red_beads(n: u32) -> u32 {
//     match n {
//         0...1 => 0,
//         _ => (n - 1) * 2,
//     }
// }
// #2
fn count_red_beads(n: u32) -> u32 {
    2 * n.checked_sub(1).unwrap_or(0)
}
