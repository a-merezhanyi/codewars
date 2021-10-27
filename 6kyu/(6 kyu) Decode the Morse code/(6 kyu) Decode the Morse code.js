decodeMorse = function(morseCode) {
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
