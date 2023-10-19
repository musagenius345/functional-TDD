function intersection(arr1, arr2) {
  let union = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      union.push(arr2[i]);
    }
  }
  return union;
}
