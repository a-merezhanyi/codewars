fn square_or_square_root(arr: &[u32]) -> Vec<u32> {
    let mut res: Vec<u32> = vec![];

    for x in arr.into_iter() {
        let squared_number = f64::sqrt(*x as f64);
        if squared_number.fract() == 0.0 {
            res.push(squared_number as u32);
        } else {
            res.push(x * x);
        }
    }

    res.to_vec()
}
