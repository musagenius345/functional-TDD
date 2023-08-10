const averageEvenNumbers = (arr) => {
  let sum = 0
  let evenNumCount = 0

  arr.forEach((el) => {
    if (el % 2 == 0) {
      sum += el
      evenNumCount += 1
    }
    
  })
  
  return sum / evenNumCount
}
