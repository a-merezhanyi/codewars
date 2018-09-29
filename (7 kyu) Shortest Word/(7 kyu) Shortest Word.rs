// #1
// fn find_short(s: &str) -> u32 {
//   let words = s.split(" ").collect::<Vec<_>>();
//   let mut min = <usize>::max_value();
//   for w in words {
//       if w.len() < min {
//           min = w.len()
//       }
//   }
//   min as u32
// }
// #2
// fn find_short(s: &str) -> u32 {
//   s
//     .split_whitespace()
//     .min_by_key(|s| s.len())
//     .unwrap()
//     .len() as u32
// }
// #3
fn find_short(s: &str) -> usize {
    s.split_whitespace().map(str::len).min().unwrap()
}
