use std::collections::HashMap;

fn stock_list(list_art: Vec<&str>, list_cat: Vec<&str>) -> String {
    if list_art.len() == 0 || list_cat.len() == 0 {
        return String::from("");
    }
    let mut books: HashMap<String, i32> = HashMap::new();
    let mut result = Vec::new();
    
    for book in list_art {
        let title_num: Vec<&str> = book.split_whitespace().collect();
        let title: String = title_num[0][0..1].to_string();
        let num: i32 = title_num[1].parse().unwrap();

        *books.entry(title).or_insert(0) += num;
      }
      
    for letter in list_cat {
        let num = match books.get(letter) {
            Some(n) => *n,
            None => 0
        };
        result.push(format!("({} : {})", letter, num))
    }
    result.join(" - ")
}
