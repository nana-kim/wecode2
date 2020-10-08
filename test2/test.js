function isODD(num) {
  let arr = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      arr = arr.push(i);
    }
  }
  return arr;
}
