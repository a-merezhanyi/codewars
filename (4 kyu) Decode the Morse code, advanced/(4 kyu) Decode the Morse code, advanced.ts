import { MORSE_CODE } from './preloaded';
export const decodeBits = (bits: string) => {
  const arrayOfBits = bits.match(/(\d)\1*/g) || []; // split for parts
  // find the length of symbols
  const length = Math.min(
    Infinity,
    ...arrayOfBits
      .filter(
        (
          x,
          i, // remove some extra 0's
        ) =>
          (i === 0 && x[0] === '1') ||
          (i > 0 && i < arrayOfBits.length - 1) ||
          (i === arrayOfBits.length - 1 && x[0] === '1'),
      )
      .map((x) => x.length),
  );

  return arrayOfBits.map((x) => {
    const symLength = x.length / length; // find the correct length

    return +x[0] // decode bits to Morse code
      ? symLength > 1
        ? '-'
        : '.'
      : symLength > 3
      ? '   '
      : symLength > 1
      ? ' '
      : '';
  }).join('');
};

export const decodeMorse = (morseCode: string) => {
  return morseCode
    .trim() //remove extra spaces
    .split('   ') //devide by words
    .map((
      str, //parse each word
    ) =>
      str
        .split(' ') //devide by symbols
        .map((s) => MORSE_CODE[s]) //return Char
        .join(''),
    )
    .join(' ');
};
