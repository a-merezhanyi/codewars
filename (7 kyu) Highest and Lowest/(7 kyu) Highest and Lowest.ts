export class Kata {
  static highAndLow(numbers: string) {
    const max = Math.max(...numbers.split(' ').map((i) => +i));
    const min = Math.min(...numbers.split(' ').map((i) => +i));

    return `${max} ${min}`;
  }
}
