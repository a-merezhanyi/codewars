// #1
// fn solution(num: i32) -> i32 {
//   let mut result = 0;
//   for i in 1..num {
//       result += if 0 == i % 3 || 0 == i % 5 {i} else {0}
//   }
//   result
// }
// #2
fn solution(num: i32) -> i32 {
  (1..num).filter(|i| 0 == i % 3 || 0 == i % 5).sum()
}
