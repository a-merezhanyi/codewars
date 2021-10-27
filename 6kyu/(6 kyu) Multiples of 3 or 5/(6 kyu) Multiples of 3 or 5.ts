export class Challenge {
  static solution(number) {
    let result = 0;
    for (let i = 1; i < number; i++) {
      result += 0 === i % 3 || 0 === i % 5 ? i : 0;
    }
    return result;
  }
}
