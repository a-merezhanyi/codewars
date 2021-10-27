export class G964 {
  public static playPass(s: string, n: number): string {
    let res = s.split('').map((a: string, i: number) => {
      if (/\d/.test(a)) {
        return String(9 - Number(a));
      } else if (/\w/.test(a)) {
        let x: number = a.charCodeAt(0) + n;
        if (x > 90) {
          x -= 26;
        }
        const l: string = String.fromCharCode(x);
        if (i % 2) {
          return l.toLowerCase();
        } else {
          return l;
        }
      } else {
        return a;
      }
    });
    return res.reverse().join('');
  }
}
