fn fibonacci(n: u32) -> u32 {
    match n {
        0...2 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}
