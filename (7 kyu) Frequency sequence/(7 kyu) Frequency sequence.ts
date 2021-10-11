export function freqSeq(str: string, sep: string): string {
  type FreqType = {
    [key: string]: number
  }
  const freq: FreqType = {};
  let newStr = '';
  
  for (let i = 0; i < str.length; i++) {
    const n = String(str[i]);
    freq[n] = freq[n] ? freq[n] += 1 : 1;
  }
  
  for (let i = 0; i < str.length; i++) {
    const n = String(str[i]);
    newStr += i ? sep + String(freq[n]) : String(freq[n]);
  }
  
  return newStr;
}
