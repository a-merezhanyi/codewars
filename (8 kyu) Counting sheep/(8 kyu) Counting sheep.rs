// #1
// fn count_sheep(sheep: &[bool]) -> u8 {
//     sheep.into_iter().filter(|&&x| x).collect::<Vec<_>>().len() as u8
// }
// #2
fn count_sheep(sheep: &[bool]) -> u8 {
    sheep.iter().filter(|&&x| x).count() as u8
}
