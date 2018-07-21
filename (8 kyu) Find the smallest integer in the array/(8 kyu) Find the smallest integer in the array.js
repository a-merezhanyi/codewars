class SmallestIntegerFinder {
  // #1
  // findSmallestInt(args) {
  //   return args.sort((a, b) => a - b)[0];
  // }
  // #2
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
