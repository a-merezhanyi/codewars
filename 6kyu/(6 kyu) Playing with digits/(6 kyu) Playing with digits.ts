export class G964 {
  public static digPow = (n: number, p: number): number => {
    let t: number = 0;
    let k: number = 0;

    n.toString()
      .split('')
      .forEach(
        (el: string, i: number): void => {
          t += Math.pow(parseInt(el), p + i);
        },
      );

    while (k <= 0xffff) {
      if (n * k++ == t) {
        return k - 1;
      }
    }

    return -1;
  };
}
