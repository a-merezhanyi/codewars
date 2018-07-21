fn countSheep(n: u32) -> String {
    // #1
    // let mut result = String::new();
    // for i in 0..n {
    //     let x = format!("{} sheep...", i + 1);
    //     result.push_str(&x);
    // }
    // return result;
    // #2
    let mut result = String::new();
    for i in 0..n {
        result.push_str(&format!("{} sheep...", i + 1));
    }
    result
}
