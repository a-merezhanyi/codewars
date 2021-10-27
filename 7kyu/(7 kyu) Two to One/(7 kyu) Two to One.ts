export class G964 {
  public static longest = (s1, s2) => {
    let res = s1 + s2;
    res = res.split('');
    res = [...new Set(res)];
    res = res.sort();
    return res.join('');
  };
}
