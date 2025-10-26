// 1 Simple solution
fn get_age(age: &str) -> u32 {
  let years = age.chars().next().unwrap();
  let number = years.to_digit(10).unwrap();

  number
}

// 2 Optimized solution
fn get_age(age: &str) -> u32 {
  age.chars().next().unwrap().to_digit(10).unwrap()
}

// 3 Clever solution
fn get_age(age: &str) -> u32 {
  (age.bytes().next().unwrap() - b'0') as u32
}

// 4 Coding golf
fn get_age(age: &str) -> u32 {
  age[0..1].parse().unwrap()
}
