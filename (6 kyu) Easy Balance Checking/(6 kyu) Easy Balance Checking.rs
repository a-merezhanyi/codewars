use regex::Regex;

fn balance(book: &str) -> String {
    let re = Regex::new(r"[^\w\d\s\.]").unwrap();
    let book = re.replace_all(book, "");
    let lines = book.split('\n')
        .filter(|x| !x.is_empty())
        .collect::<Vec<&str>>();
        
    let mut balance = lines[0].parse::<f64>().unwrap();
    let mut prices = vec![];
    
    let mut result = String::from(
        format!("Original Balance: {:.2}\n", balance));
        
    for row in lines[1..].iter() {
        let row = row.split(" ").collect::<Vec<&str>>();
        let (n, name, price) = (row[0], row[1], row[2]);
        let price = price.parse::<f64>().unwrap();
        result.push_str(&format!("{} {} {:.2} Balance {:.2}\n",
            n, name, price, balance - price));
        prices.push(price);
        balance -= price;
    }
    
    let s = prices.iter().fold(0f64, |a, b| a + b);
    let n = prices.len() as f64;
    
    result.push_str(&format!("Total expense  {:.2}\n", s));
    result.push_str(&format!("Average expense  {:.2}", s / n));
    
    result
}
