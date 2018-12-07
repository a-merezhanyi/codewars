// #1
// fn generate_shape(n: i32) -> String {
//     let mut str = vec![];
//     for _ in 0..n {
//         str.push("+".repeat(n as usize));
//     }
//     str.join("\n")
// }
// #2
// fn generate_shape(n: i32) -> String {
//     vec!["+".repeat(n as usize); n as usize].join("\n")
// }
// #3
fn generate_shape(n: usize) -> String {
    vec!["+".repeat(n); n].join("\n")
}
