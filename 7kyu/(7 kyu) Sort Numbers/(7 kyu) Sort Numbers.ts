export function solution(nums: number[]): number[] {
  return nums ? nums.sort((a, b) => a - b) : [];
}
