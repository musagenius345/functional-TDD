function factorial(num, workingValue = 1) {
  if (num >= 1) {
    return factorial(num - 1, workingValue * num);
  }

  return workingValue;
}

console.log(factorial(0));
