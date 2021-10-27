// #1
// fn high_and_low(numbers: &str) -> String {
//     let mut res = String::new();
//     let arr_str = numbers.split_whitespace().collect::<Vec<_>>();
//     let arr_num = arr_str
//         .iter()
//         .map(|&s| s.parse::<i32>().unwrap())
//         .collect::<Vec<i32>>();

//     res.push_str(&arr_num.iter().max().unwrap().to_string());
//     res.push_str(&" ".to_string());
//     res.push_str(&arr_num.iter().min().unwrap().to_string());
//     res
// }
// #2
// fn high_and_low(numbers: &str) -> String {
//     let arr_str = String::from(numbers);
//     let arr_num: Vec<i32> = arr_str
//         .split_whitespace()
//         .map(|s| s.parse::<i32>().unwrap())
//         .collect();
//     let low = arr_num.iter().min().unwrap();
//     let high = arr_num.iter().max().unwrap();
//     format!("{} {}", high, low)
// }
// #3
fn high_and_low(numbers: &str) -> String {
    format!(
        "{} {}",
        numbers
            .split_whitespace()
            .map(|s| s.parse::<i64>().unwrap())
            .max()
            .unwrap(),
        numbers
            .split_whitespace()
            .map(|s| s.parse::<i64>().unwrap())
            .min()
            .unwrap()
    )
}
