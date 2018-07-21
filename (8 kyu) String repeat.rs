/// String repeat (8 kyu)
/// https://www.codewars.com/kata/string-repeat
/// Write a function called repeatStr which repeats the given string string
/// exactly n times.
/// repeatStr(6, "I") // "IIIIII"
/// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
fn repeat_str(src: &str, count: usize) -> String {
    // #1
    // let mut str = String::new();
    // for _ in 0..count {
    //     str.push_str(src);
    // }
    // return str;
    // #2
    // let mut str = String::new();
    // str = src.repeat(count);
    // return str;
    // #3
    // (0..count).map(|_| src).collect()
    // #4
    src.repeat(count)
}
