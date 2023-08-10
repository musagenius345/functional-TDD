function xIndex(str: string) {
  if (str.length == 0) {
    return 0
  }

  if (str[0] == 'x') {
    return 0
  }
  return 1 + xIndex(str.slice(1))


}
console.log(xIndex("abcdefghijklmnopqrstuvwxyz"));

