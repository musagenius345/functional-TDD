function uniquePath(row: number, col: number) {
  if (row == 1 || col == 1) {
    return 1;
  }
  return uniquePath(row, col - 1) + uniquePath(row - 1, col);
}

console.log(uniquePath(2, 7));
