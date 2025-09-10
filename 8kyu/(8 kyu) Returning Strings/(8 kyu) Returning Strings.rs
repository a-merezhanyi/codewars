// 1 Plain solution
fn greet(name: &str) -> String {
    let str1 = "Hello, ";
    let str2 = " how are you doing today?";

    return format!("{}{}{}", str1, name, str2);
}

// 2 Optimized solution
fn greet_optimized(name: &str) -> String {
    format!("Hello, {} how are you doing today?", name)
}

// 3 Clever solution
fn greet_clever(name: &str) -> String {
    ["Hello, ", name, " how are you doing today?"].concat()
}