// #1
// fn min_value(mut digits: Vec<i32>) -> i32 {
//     digits.sort();
//     digits.dedup_by(|a, b| a == b);
//     let mut res = "".to_string();
//     for i in digits {
//         res.push_str(&i.to_string());
//     }
//     res.parse::<i32>().unwrap()
// }
// #2
// fn min_value(mut digits: Vec<i32>) -> i32 {
//     digits.sort();
//     digits.dedup();
//     digits
//         .iter()
//         .map(|x| x.to_string())
//         .collect::<String>()
//         .parse::<i32>()
//         .unwrap()
// }
// #3
fn min_value(mut digits: Vec<i32>) -> i32 {
    digits.sort();
    digits.dedup();

    digits.into_iter().fold(0, |acc, x| acc * 10 + x)
}
