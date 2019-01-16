export class Challenge {
  static getMiddle(s: string) {
    const middle = s.length / 2;
    if (s.length % 2) {
      return s.charAt(Math.floor(middle));
    } else {
      return s.slice(middle - 1, middle + 1);
    }
  }
}
