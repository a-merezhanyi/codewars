// 1 Simple solution
fn powers_of_two(n: u8) -> Vec<u128> {
    let mut result = Vec::new();
    for i in 0..=n {
        result.push(2u128.pow(i as u32));
    }
    result
}

// 2 Optimized solution
fn powers_of_two(n: u8) -> Vec<u128> {
    (0..=n).map(|i| 1u128 << i).collect()
}

// 3 Clever solution

