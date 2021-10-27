// #1
// fn last<T: Clone>(slice: &[T]) -> T {
//     let n = slice.len() - 1;

//     return slice[n].to_owned();
// }
// #2
// fn last<T: Clone>(slice: &[T]) -> T {
//     slice.last().unwrap().to_owned()
// }
// #3
fn last<T: Clone>(slice: &[T]) -> T {
    let l = slice.last();
    match l {
        None => panic!("empty"),
        Some(x) => x.clone(),
    }
}
