/// Sort and Star (8 kyu)
/// https://www.codewars.com/kata/sort-and-star
/// You will be given an vector of string(s). You must sort it
/// alphabetically (case-sensitive!!) and then return the first value.
/// The returned value must be a string, and have "***" between each of
/// its letters.
/// You should not remove or add elements from/to the array.
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
