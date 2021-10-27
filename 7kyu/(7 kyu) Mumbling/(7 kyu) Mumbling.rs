fn accum(s: &str) -> String {
    // #1
    // let vec_str = s.split_terminator("").skip(1).collect::<Vec<_>>();
    // let last_sym = s.len() - 1;
    // let mut res = String::new();
    // for (index, curr_char) in vec_str.iter().enumerate() {
    //     res.push_str(&format!(
    //         "{}{}",
    //         &curr_char.to_uppercase(),
    //         &curr_char.to_lowercase().repeat(index)
    //     ));
    //     if index < last_sym {
    //         res.push_str("-");
    //     }
    // }
    // res

    // #2
    s.chars()
        .enumerate()
        .map(|(index, curr_char)| {
            curr_char.to_string().to_uppercase() + &(0..index)
                .map(|_| curr_char.to_string().to_lowercase())
                .collect::<String>()
        }).collect::<Vec<_>>()
        .join("-")
}
