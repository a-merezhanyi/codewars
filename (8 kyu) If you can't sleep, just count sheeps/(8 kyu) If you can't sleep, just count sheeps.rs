/// If you can't sleep, just count sheeps (8 kyu)
/// https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheeps
/// Given a number, 3 for example, return a string with a murmur:
/// "1 sheep...2 sheep...3 sheep..."
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
