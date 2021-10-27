def DNA_strand(dna):
    # #1
    # dna = dna.replace("A", "t")
    # dna = dna.replace("T", "a")
    # dna = dna.replace("C", "g")
    # dna = dna.replace("G", "c")
    
    # return dna.upper()
    # #2
    # Python 3.4
    return dna.translate(str.maketrans("ATCG","TAGC"))
