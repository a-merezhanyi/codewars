def stock_list(listOfArt, listOfCat):
    if len(listOfArt) == 0 or len(listOfCat) == 0:
        return "" 

    books = {}
    result = []
    for book in listOfArt:
        title_num = book.split()
        title = title_num[0]
        num = title_num[1]
        if title[0] in books:
            books[title[0]] += int(num)
        else:
            books[title[0]] = int(num)

    for letter in listOfCat:
        num = books[letter] if letter in books else 0
        result.append("(" + letter + " : " + str(num) + ")")

    return " - ".join(result)
