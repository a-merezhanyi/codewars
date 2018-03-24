/**
 * Decode the Morse code, advanced (4 kyu)
 * https://www.codewars.com/kata/decode-the-morse-code-advanced
 * In this kata you have to write a Morse code decoder for wired electrical
 * telegraph.
 * Electric telegraph is operated on a 2-wire line with a key that, when
 * pressed, connects the wires together, which can be detected on a remote
 * station. The Morse code encodes every character being transmitted as a
 * sequence of "dots" (short presses on the key) and "dashes" (long presses on
 * the key).
 */
const decodeBits = bits => {
  const arrayOfBits = bits.match(/(\d)\1*/g); // split for parts
  // find the length of symbols
  const length = Math.min(Infinity, ...arrayOfBits
    .filter((x, i) => // remove some extra 0's 
      (i === 0 && x[0] === '1') ||
      (i > 0 && i < arrayOfBits.length - 1) ||
      (i === arrayOfBits.length - 1 && x[0] === '1')
    )
    .map(x => x.length)
  );

  return arrayOfBits
    .map(x => {
      const symLength = x.length / length; // find the correct length
      
      return +x[0] // descode bits to Morse code
        ? symLength > 1 ? '-' : '.'
        : symLength > 3 ? '   '
          : symLength > 1 ? ' ' : '';
    })
    .join``;
}

const decodeMorse = morseCode => {
return morseCode
  .trim() //remove extra spaces
  .split('   ') //devide by words
  .map((str) => //parse each word
    str
      .split(' ') //devide by symbols
      .map((s) => MORSE_CODE[s]) //return Char
      .join('')
  )
  .join(' ');
}
