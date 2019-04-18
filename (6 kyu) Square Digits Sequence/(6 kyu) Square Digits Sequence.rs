use std::collections::HashSet;

fn square_digits_sequence(a0: usize) -> usize {
    let mut nums: HashSet<usize> = HashSet::new();
    let mut x = a0;
    while !nums.contains(&x) {
        nums.insert(x);
        let digits: String = x.to_string();
        x = digits.chars().fold(0, |mut sum, d| {
            let n = d.to_digit(10).unwrap() as usize;
            sum += n * n;
            sum
        });
    }
    nums.len() + 1
}