fn square_sum(vec: Vec<i32>) -> i32 {
    // #1
    // let mut res = 0;
    // for i in 0..vec.len() {
    //     res += vec[i] * vec[i]
    // }
    // res
    // #2
    // vec.iter().fold(0, |sum, x| sum + (x * x))
    // #3
    vec.iter().map(|x| x * x).sum()
}
