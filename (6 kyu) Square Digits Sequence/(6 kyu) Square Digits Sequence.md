# Square Digits Sequence (6 kyu)

https://www.codewars.com/kata/simple-fun-number-23-square-digits-sequence

Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again. Given the first element a0, find the length of the sequence.

## Example

For a0 = 16, the output should be `9`

Here's how elements of the sequence are constructed:

```
a0 = 16
a1 = 1^2 + 6^2 = 37
a2 = 3^2 + 7^2 = 58
a3 = 5^2 + 8^2 = 89
a4 = 8^2 + 9^2 = 145
a5 = 1^2 + 4^2 + 5^2 = 42
a6 = 4^2 + 2^2 = 20
a7 = 2^2 + 0^2 = 4
a8 = 42 = 16, which has already occurred before (a0)
```

Thus, there are 9 elements in the sequence.<br>
For a0 = 103, the output should be `4`<br>
The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.

## Input/Output

- `[input]` integer a0<br>
  First element of a sequence, positive integer.<br>
  Constraints: 1 ≤ a0 ≤ 650.
- `[output]` an integer
