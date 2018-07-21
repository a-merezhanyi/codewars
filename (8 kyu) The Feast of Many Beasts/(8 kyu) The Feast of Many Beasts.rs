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
