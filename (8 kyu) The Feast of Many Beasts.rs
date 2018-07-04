/// The Feast of Many Beasts (8 kyu)
/// https://www.codewars.com/kata/the-feast-of-many-beasts/
/// All of the animals are having a feast! Each animal is bringing one
/// dish. There is just one rule: the dish must start and end with the
/// same letters as the animal's name. For example, the great blue heron
/// is bringing garlic naan and the chickadee is bringing chocolate cake.
///
/// Write a function feast that takes the animal's name and dish as
/// arguments and returns true or false to indicate whether the beast is
/// allowed to bring the dish to the feast.
///
/// Assume that beast and dish are always lowercase strings, and that each
/// has at least two letters. beast and dish may contain hyphens and
/// spaces, but these will not appear at the beginning or end of the
/// string. They will not contain numerals.
fn feast(beast: &str, dish: &str) -> bool {
    // // #1
    //     let start = beast.starts_with(dish.chars().next().unwrap());
    //     let end = beast.ends_with(dish.chars().last().unwrap());
    //     return start && end;
    // // #2
    //     let start = beast.starts_with(&dish[0..1]);
    //     let end = beast.ends_with(&dish[dish.len()-1..]);
    //     start && end
    // #3
    &beast[..1] == &dish[..1] && &beast[beast.len() - 1..] == &dish[dish.len() - 1..]
}
