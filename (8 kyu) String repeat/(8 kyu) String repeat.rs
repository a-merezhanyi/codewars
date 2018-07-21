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
