fn play_pass(s: &str, n: u32) -> String {
  s
    .char_indices()
    .map(|(i, a)| match a {
      a if a.is_digit(10) => std::char::from_u32(105 - (a as u32)).unwrap(),
      a if a.is_alphabetic() => {
        let mut x = std::char::from_u32(((a as u32 + n - 65) % 26 + 65)).unwrap();
        if i % 2 == 1 { x = x.to_ascii_lowercase() }
        x
      },
      _ => a
    })
    .rev()
    .collect::<String>()
}
