export class G964 {
  public static travel = (r, zipcode) => {
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
  };
}
