/// Square(n) Sum (8 kyu)
/// https://www.codewars.com/kata/square-n-sum
/// Complete the squareSum/square_sum/SquareSum method so that it squares
/// each number passed into it and then sums the results together.
/// For example:
/// square_sum([1, 2, 2]) // should return 9

fn square_sum(vec: Vec<i32>) -> i32 {
    // #1
    // let mut res = 0;
    // for i in 0..vec.len() {
    //     res += vec[i] * vec[i]
    // }
    // res
    // #2
    vec.iter().fold(0, |sum, x| sum + (x * x))
}
