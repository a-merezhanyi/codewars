fn even_numbers(array: Vec<i32>, number: usize) -> Vec<i32> {
  let arr = array.into_iter().filter(|&i|i % 2 == 0).collect::<Vec<_>>();
  let from = arr.len() - number;
  arr[from..].to_vec()
}
