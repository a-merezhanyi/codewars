// #1
// fn max_number(n: u32) -> u32 {
//     let str = n.to_string();
//     let mut temp = str.chars().collect::<Vec<char>>();
//     temp.sort();
//     let res = temp.into_iter().rev().collect::<String>();
//     res.parse::<u32>().unwrap()
// }
// #2
fn max_number(n: u32) -> u32 {
    let str = n.to_string().chars().collect::<Vec<char>>();
    str.sort();
    str.iter().rev().collect::<String>().parse::<u32>().unwrap()
}
