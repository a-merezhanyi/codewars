# Playing with passphrases (6 kyu)

https://www.codewars.com/kata/playing-with-passphrases/

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

1. shift each letter by a given number but the transformed letter must be a letter (circular shift),
1. replace each digit by its complement to 9,
1. keep such as non alphabetic and non digit characters,
1. downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
1. reverse the whole result.

### Example:

```
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"
```

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase
