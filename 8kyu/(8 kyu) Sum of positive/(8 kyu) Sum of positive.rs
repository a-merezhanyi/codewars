fn positive_sum(slice: &[i32]) -> i32 {
    let mut res = 0;

    for i in 0..slice.len() {
        if slice[i] > 0 {
            res += slice[i];
        }
    }

    res
}
