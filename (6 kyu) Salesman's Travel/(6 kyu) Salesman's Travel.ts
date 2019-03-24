export class G964 {
  public static travel = (r: string, zipcode: string): string => {
    const list = r.split(',').map((x: string) => {
      const addr = x.match(/(^\d+) ([a-zA-z.\s]+) ([A-Z]{2} \d+)$/);
      return {
        house: addr[1],
        street: addr[2],
        zip: addr[3],
      };
    });

    let streets: string[] = [];
    let houses: string[] = [];
    list.forEach((record) => {
      if (record.zip === zipcode) {
        streets.push(record.street);
        houses.push(record.house);
      }
    });
    return `${zipcode}:${streets.join(',')}/${houses.join(',')}`;
  };
}
