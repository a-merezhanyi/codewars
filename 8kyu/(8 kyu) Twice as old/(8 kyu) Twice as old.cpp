int twice_as_old(int dad, int son) {
  int twiceOld = son * 2;
  int res = dad - twiceOld;

  if (res > 0) {
    return res;
  }

  return -res;
}