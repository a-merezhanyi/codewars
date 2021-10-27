fn dna_to_rna(dna: &str) -> String {
    // #1
    // dna.chars()
    //     .map(|x| match x {
    //         'T' => 'U',
    //         _ => x,
    //     })
    //     .collect()
    // #2
    str::replace(dna, "T", "U")
}
