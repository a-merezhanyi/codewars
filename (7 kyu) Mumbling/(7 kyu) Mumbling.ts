export class G964 {
  public static accum(s: string): string {
    return s
      .split('')
      .map((el, i) =>
        /^[a-zA-Z]$/ ? el.toUpperCase() + el.repeat(i).toLowerCase() : '',
      )
      .join('-');
  }
}
