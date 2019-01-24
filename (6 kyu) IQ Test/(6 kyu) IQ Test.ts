export function iqTest(numbers: string): number {
  const nums = numbers.split(' ').map((el: string) => +el);
  const odd = nums.filter((el: number) => el % 2 === 1);
  const even = nums.filter((el: number) => el % 2 === 0);

  return odd.length < even.length
    ? nums.indexOf(odd[0]) + 1
    : nums.indexOf(even[0]) + 1;
}
