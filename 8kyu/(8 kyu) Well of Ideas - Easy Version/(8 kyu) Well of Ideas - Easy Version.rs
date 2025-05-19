// 1 Plain Solution
fn well(x: &[&str]) -> &'static str {
    let mut goodIdeas = 0;
    for s in x {
        match *s {
            "good" => goodIdeas += 1,
            _ => {}
        }
    }
    if goodIdeas == 0 {
        "Fail!"
    } else if goodIdeas > 0 && goodIdeas < 3 {
        "Publish!"
    } else {
        "I smell a series!"
    }
}

// 2 Optimized Solution
fn well(x: &[&str]) -> &'static str {
    let goodIdeas = x.iter().filter(|&&s| s == "good").count();
    match goodIdeas {
        0 => "Fail!",
        1..=2 => "Publish!",
        _ => "I smell a series!",
    }
}

// 3 Clever Solution
fn well(x: &[&str]) -> &'static str {
    match x.iter().filter(|&&s| s == "good").count() {
        0 => "Fail!",
        1..=2 => "Publish!",
        _ => "I smell a series!",
    }
}
