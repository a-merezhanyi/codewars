export class G964 {
  public static revrot(str: string, sz: number) {
    if (sz <= 0 || str == '' || sz > str.length) {
      return '';
    }
    const arr = [];
    const s = str.split('');
    while (s.length >= sz) {
      arr.push(s.splice(0, sz));
    }
    const res = arr.map((x) => {
      const sum = x.reduce((a: number, c: number) => a + Math.pow(c, 3), 0);
      if (sum % 2) {
        x.push(x[0]);
        x.shift();
        return x.join('');
      } else {
        return x.reverse().join('');
      }
    });
    return res.join('');
  }
}
