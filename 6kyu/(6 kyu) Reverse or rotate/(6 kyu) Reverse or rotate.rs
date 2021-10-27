fn revrot(s: &str, c: usize) -> String {
  if s.is_empty() || c == 0 || c > s.len() {
    return "".to_string();
  }
  let mut v: Vec<char> = s.chars().collect();
  v
    .chunks_exact_mut(c)
    .flat_map(|x| {
      let sum: u32 = x
        .iter()
        .map(|n| n.to_digit(10).unwrap().pow(3))
        .sum();
      
      if sum % 2 == 0 { x.reverse(); }
      else { x.rotate_left(1); }
      
      x.iter()
    })
    .collect::<String>()
}
