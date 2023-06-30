import { newArray } from './arrayGenerator.js'


// function hasDuplicateValue(array) {
//   let step = 0
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       step++
//       if (i !== j && array[i] === array[j]) {
//         return console.log('Duplicate found')
//         // return true;
//       }
//     }
//   }
//   console.log(step)
//   return console.log('No duplicate')
//   // return false
// }


function hasDuplicateValue(array) {
  let steps = 0;
  let existingNumbers = [];
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (existingNumbers[array[i]] === 1) {
      return true;
    } else {
      existingNumbers[array[i]] = 1;
    }
  }
  console.log(steps);
  return false;
}

const array = newArray(30, 100000)


hasDuplicateValue(array)