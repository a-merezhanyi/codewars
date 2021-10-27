fn two_sort(arr: &[&str]) -> String {
    let mut a = vec![""; arr.len()];
    a[..arr.len()].clone_from_slice(&arr);
    a.sort();

    let mut res = String::new();
    for (i, c) in a[0].chars().enumerate() {
        if i == a[0].len() - 1 {
            res.push(c);
        } else {
            res.push_str(&String::from(format!("{}***", c)));
        }
    }

    res
}
