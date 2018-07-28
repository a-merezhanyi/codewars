// #1
// fn greet(input : &str) -> String {
//   if input == "Johnny" {
//     return "Hello, my love!".to_string();
//   };
//   return format!("Hello, {}!", input);
// }
// #2
// fn greet(input: &str) -> String {
//     return match input {
//         "Johnny" => "Hello, my love!".to_string(),
//         _ => format!("Hello, {}!", input),
//     };
// }
// #3
// fn greet(input: &str) -> String {
//     match input {
//         "Johnny" => "Hello, my love!".to_string(),
//         _ => format!("Hello, {}!", input),
//     }
// }
// #4
// fn greet(input: &str) -> String {
//     format!(
//         "Hello, {}!",
//         match input {
//             "Johnny" => "my love",
//             _ => input,
//         }
//     )
// }
// #5
fn greet(input: &str) -> String {
    format!(
        "Hello, {}!",
        if input == "Johnny" { "my love" } else { input }
    )
}
