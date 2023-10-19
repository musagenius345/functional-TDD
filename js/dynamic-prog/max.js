var max = function (arr, num) {
  if (num === void 0) {
    num = 0;
  }
  console.log("Recursion: ", num);
  num++;
  if (arr.length === 1) {
    return arr[0];
  }
  var maxRemainder = max(arr.slice(1));
  if (arr[0] > maxRemainder) {
    return arr[0];
  }
  return maxRemainder;
};
//
// console.log(max([1]));
// console.log(max([134, 22, 99, 0]));
// console.log(max([134, 222, 999,]));
// console.log(max([134, 222, 666, 999,]));
//
