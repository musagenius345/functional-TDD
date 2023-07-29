function hundredSum(array, leftIndex = 0, rightIndex = array.length - 1) {
  while (leftIndex < array.length / 2) {
    if (array[leftIndex] + array[rightIndex] != 100) {
      return false
    }
    leftIndex +=1
    rightIndex -=1
  }
  
  return true
}


const arr1 = [1,2,3,4,96,97,98,99]

console.log(hundredSum(arr1))