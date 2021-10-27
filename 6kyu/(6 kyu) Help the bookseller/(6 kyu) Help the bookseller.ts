export class G964 {
  public static stockList = (listOfArt: string[], listOfCat: string[]) => {
    if (!listOfArt.length || !listOfCat.length) {
      return '';
    }
    const books = {};
    const result = [];
    listOfArt.forEach((book: string) => {
      const [title, num] = book.split(' ');
      books[title[0]] = (books[title[0]] | 0) + +num;
    });
    return listOfCat
      .map((letter: string) => `(${letter} : ${books[letter] | 0})`)
      .join(' - ');
  };
}
