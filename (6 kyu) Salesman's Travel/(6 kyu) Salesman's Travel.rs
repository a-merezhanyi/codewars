pub fn travel(r: &str, zipcode:&str) -> String {
    if zipcode == "" {
        return String::from(":/")
    }
    let (nums, street): (Vec<&str>, Vec<&str>) = r.split(",")
               .filter(|s| s.ends_with(zipcode))
               .map(|s| {
                   let iter: Vec<&str> = s.trim().splitn(2, " ").collect();
                   let len = iter[1].chars().count();
                   (iter[0], &iter[1][..len-zipcode.len()-1])
               })
               .unzip();
    format!("{}:{}/{}", zipcode, street.join(","), nums.join(","))
}