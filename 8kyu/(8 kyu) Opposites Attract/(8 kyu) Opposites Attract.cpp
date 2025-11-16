// 1 Plain solution
bool lovefunc(int f1, int f2) {
  bool positiveCase1 = (f1 % 2 == 0) && (f2 % 2 != 0);
  bool positiveCase2 = (f1 % 2 != 0) && (f2 % 2 == 0);

  if (positiveCase1 || positiveCase2) {
    return true;
  } else {
    return false;
  }
}

// 2 Optimized solution
bool lovefunc(int f1, int f2) {
  bool isF1Even = (f1 % 2 == 0);
  bool isF2Even = (f2 % 2 == 0);
  return isF1Even != isF2Even;
}

// 3 Clever solution
bool lovefunc(int f1, int f2) {
  return (f1 + f2) % 2;
}

// 4 Coding golf
bool lovefunc(int a,int b){return(a^b)&1;}
