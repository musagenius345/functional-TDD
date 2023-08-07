function numberSteps(n) {
  if(n < 0){ return 0}
  if(n == 0 || n == 1){ return 1}
  return  numberSteps(n-1) + numberSteps(n-2) + numberSteps(n-3)
}

let result = numberSteps(20)
console.log(result)