// 1 Simple solution
fn plural (n: f64) -> bool {
    if n == 1.0 || n == -1.0 {
        false
    } else {
        true
    }
}

// 2 Optimized solution
fn plural(n: f64) -> bool {
    n != 1.0 && n != -1.0
}

// 3 Clever solution
fn plural(n: f64) -> bool {
    n.abs() != 1.0
}

// 3 Coding golf
fn plural(n: f64) -> bool {n != 1.}
