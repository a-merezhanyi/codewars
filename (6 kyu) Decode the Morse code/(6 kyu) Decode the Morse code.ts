export function decodeMorse(morseCode: string): string {
    return morseCode
    .trim()
    .split('   ')
    .map((str: string) =>
    str
    .split(' ')
        .map((s: string) => MORSE_CODE[s])
        .join(''),
    )
    .join(' ');
}
