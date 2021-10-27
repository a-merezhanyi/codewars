fn even_or_odd(i: i32) -> &'static str {
    // #1
    // if i % 2 == 0 {
    //     return "Even";
    // } else {
    //     return "Odd";
    // }
    // #2
    // return if i % 2 == 0 { "Even" } else { "Odd" };
    // #3
    // if i % 2 == 0 { "Even" } else { "Odd" }
    // #4
    if i & 1 == 0 {
        "Even"
    } else {
        "Odd"
    }
}
