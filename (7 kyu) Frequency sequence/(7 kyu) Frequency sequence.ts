export function freqSeq(str: string, sep: string): string {
  const freq = {};
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = freq[str[i]] ? (freq[str[i]] += 1) : 1;
  }

  for (let i = 0; i < str.length; i++) {
    newStr += i ? sep + freq[str[i]] : freq[str[i]];
  }

  return newStr;
}
