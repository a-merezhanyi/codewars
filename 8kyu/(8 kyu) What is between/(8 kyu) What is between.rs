// 1 Plain solution
fn between(a: i16, b: i16) -> Vec<i16> {
    let mut result = Vec::new();
    for i in a..=b {
        result.push(i);
    }
    result
}

// 2 Optimized solution
fn between(a: i16, b: i16) -> Vec<i16> {
    (a..=b).map(|x| x).collect()
}

// 3 Clever solution
fn between(a: i16, b: i16) -> Vec<i16> {
    (a..=b).collect()
}

// 4 Coding golf
fn between(a: i16, b: i16) -> Vec<i16> {
    Vec::from_iter(a..=b)
}
