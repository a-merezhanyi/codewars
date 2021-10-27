// #1
// fn number(stops: &[(i32,i32)]) -> i32 {
//     stops.iter().map(|c| c.0 - c.1).sum()
// }
// #2
fn number(stops: &[(i32, i32)]) -> i32 {
    stops.iter().fold(0, |a, c| a + c.0 - c.1)
}
