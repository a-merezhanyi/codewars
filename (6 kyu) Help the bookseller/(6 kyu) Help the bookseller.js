// #1 Use forEach
// function stockList(listOfArt, listOfCat) {
//   if (!listOfArt.length || !listOfCat.length) {
//     return '';
//   }
//   const books = {};
//   const result = [];
//   listOfArt.forEach((book) => {
//     const [title, num] = book.split` `;
//     books[title[0]] = books[title[0]] ? (books[title[0]] += +num) : +num;
//   });
//   listOfCat.forEach((letter) => {
//     const num = books[letter] || 0;
//     result.push(`(${letter} : ${num})`);
//   });
//   return result.join` - `;
// }

// #2 Optimazed forEach
// function stockList(listOfArt, listOfCat) {
//   if (!listOfArt.length || !listOfCat.length) {
//     return '';
//   }
//   const books = {};
//   listOfArt.forEach((book) => {
//     const title = book[0];
//     books[title] = (books[title] | 0) + +book.split` `[1];
//   });
//   return listOfCat.map((letter) => {
//     return `(${letter} : ${books[letter] | 0})`;
//   }).join` - `;
// }

// #3 Use reduce
function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) {
    return '';
  }
  return listOfCat
    .map((book) => {
      const sum = listOfArt.reduce(
        (acc, title) => acc + (title[0] === book ? +title.split(' ')[1] : 0),
        0,
      );
      return `(${book} : ${sum})`;
    })
    .join(' - ');
}
