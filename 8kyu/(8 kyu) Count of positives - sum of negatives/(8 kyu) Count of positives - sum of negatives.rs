// #1
// fn count_positives_sum_negatives(input: Vec<i32>) -> Vec<i32> {
//     if input.len() == 0 {
//         return vec![];
//     }
//     let mut res = vec![0, 0];
//     for x in &input {
//         if x > &0 {
//             res[0] += 1;
//         } else {
//             res[1] += x;
//         }
//     }
//     res
// }
// #2
fn count_positives_sum_negatives(input: Vec<i32>) -> Vec<i32> {
    if input.is_empty() {
        return vec![];
    }

    input.iter().fold(vec![0, 0], |mut res, &x| {
        if x.is_positive() {
            res[0] += 1;
        } else {
            res[1] += x;
        }
        res
    })
}
