fn reverse_seq(n: u32) -> Vec<u32> {
    // #1
    // let mut result = vec![0; n as usize];
    // for i in 0..n {
    //     let index: usize = i as usize;
    //     result[index] = n - i;
    // }
    // return result;
    // #2
    // let mut result = vec![0; n as usize];
    //     for i in 0..n {
    //         result[i as usize] = n - i;
    //     }
    //     return result;
    // #3
    // let mut result = Vec::new();
    // for i in (0..n).rev() {
    //     result.push(i + 1);
    // }
    // result
    // #4
    (1..n + 1).rev().collect()
}
