fn freq_seq(s: &str, sep: &str) -> String {
    s.chars()
        .map(|c| s.matches(c).count().to_string())
        .collect::<Vec<String>>()
        .join(sep)
}
