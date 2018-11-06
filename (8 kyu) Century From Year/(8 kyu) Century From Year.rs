// #1
// fn century(year: u32) -> u32 {
//     year / 100 + if year % 100 == 0 { 0 } else { 1 }
// }
// #2
fn century(year: u32) -> u32 {
    (year - 1) / 100 + 1
}
