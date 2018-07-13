/// Remove duplicate words (7 kyu)
/// http://www.codewars.com/kata/remove-duplicate-words
/// Your task is to remove all duplicate words from string, leaving only
/// single words entries.
/// Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma
/// gamma gamma delta'
/// Output: 'alpha beta gamma delta'
use std::collections::HashSet;

fn remove_duplicate_words(s: &str) -> String {
    let v: Vec<&str> = s.split(" ").collect();
    let mut set = HashSet::new();
    let mut arr = Vec::new();
    let mut res = String::new();

    for i in 0..v.len() {
        if !set.contains(&v[i]) {
            set.insert(&v[i]);
            arr.push(&v[i]);
        }
    }
    for i in 0..arr.len() {
        if i == arr.len() - 1 {
            res.push_str(arr[i]);
        } else {
            res.push_str(&String::from(format!("{} ", arr[i])));
        }
    }

    res
}
