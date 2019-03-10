// #1 A clear solution
function travel(r, zipcode) {
  // create a list of records:
  const list = r.split`,` // separeted by a comma
    .map((x) => {
      // create an address, using a pattern:
      // 1) house: at the begin of a string,
      // a group if digits before a whitespace
      // 2) street: all alpha symbols plus a dot after a space
      // (after the previous group)
      // 3) zip: at the end of a string,
      // a group of 2 caps letters, then a whitespace, then any digits
      const addr = x.match(/(^\d+) ([a-zA-z.\s]+) ([A-Z]{2} \d+)$/);
      return {
        house: addr[1],
        street: addr[2],
        zip: addr[3],
      };
    });

  let streets = [];
  let houses = [];
  // for each reccord
  list.forEach((r) => {
    // which zip we are looking for
    if (r.zip === zipcode) {
      // record a street title
      streets.push(r.street);
      // and a house number
      houses.push(r.house);
    }
  });
  // compile a returning string
  return `${zipcode}:${streets.join(',')}/${houses.join(',')}`;
}

// #2 A clever solution
function travel(r, zipcode) {
  // create an address, using a pattern:
  // 1) house: a group if digits, then a whitespace
  // 2) street: any symbols, then a whitespace
  // store only those records that contain an equal zipcode
  // and ends with it
  re = RegExp('(\\d+)\\s+(.+)\\s+' + zipcode + '$');

  addr = r.split`,` // create records separated by a comma
    // compare each element against a RegExp pattern
    .map((r) => r.match(re))
    // those elements that doesn't contain required zipcode are null, so
    // filter empty records
    .filter((r) => r);

  // compile a returning string
  return `${zipcode}:${addr.map((r) => r[2])}/${addr.map((r) => r[1])}`;
}
