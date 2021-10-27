fn rgb(r: i32, g: i32, b: i32) -> String {
  fn dec_to_hex(c: i32) -> String {
    if c < 0 { String::from("00") }
    else if c > 255 { String::from("FF") }
    else { format!("{:02X}", c) }
  }

  format!("{}{}{}", dec_to_hex(r), dec_to_hex(g), dec_to_hex(b))
}
