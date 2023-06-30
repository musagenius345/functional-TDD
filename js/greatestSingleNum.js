const greaterNumber = (arr) => {
  let steps = 0
  for (let i in arr) {
    let isIValTheGreatest = true
    for (let j in arr) {
      if (j > i) {
        // If we find another value that is greater than i, 
        //i is not the greatest:
        steps++
        isIValTheGreatest = false
      }
    }
    //If, by the time we checked all the other numbers, i is still the greatest, it means that i is the greatest number:
    if (isIValTheGreatest) {
      return i
    }

  }
  console.log(steps)
}


const arr1 = [5, 80, 32, 77, 21, 74, 1]
const arr2 = arr1.sort((a, b) => b - a)

greaterNumber(arr1)
// greaterNumber(arr2)