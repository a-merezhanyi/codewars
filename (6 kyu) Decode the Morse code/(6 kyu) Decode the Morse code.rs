impl MorseDecoder {

    fn decode_morse(&self, encoded: &str) -> String {
        encoded
            .trim()
            .split("   ")
            .map(|x| x.split(' ')
                      .filter_map(|y| { self.morse_code.get(y) })
                      .cloned()
                      .collect())
            .collect::<Vec<String>>()
            .join(" ")
    }
    
}
