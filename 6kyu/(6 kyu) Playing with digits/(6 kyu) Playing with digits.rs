fn dig_pow(n: i64, p: i32) -> i64 {
    let n: u64 = n as u64;
    let p: u32 = p as u32;
    let mut res: u64 = 0;
    let mut string: Vec<u32> = Vec::new();
    let mut temp = n;
    while temp > 0 {
        string.push(temp as u32 % 10);
        temp /= 10;
    }
    string.reverse();
    let mut i = p;
    for c in string {
        res += (c as u64).pow(i);
        i += 1;
    }
    if res % n == 0 { (res / n) as i64 } else { -1 }
}
