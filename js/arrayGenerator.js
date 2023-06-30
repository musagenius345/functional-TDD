export const newArray = (num, mul) => {
  let numberArray = []
  for (let i = 0; i < num; i++) {
    let randomNum = Math.floor(Math.random() * mul)
    numberArray.push(randomNum)
  }
  return numberArray
}

// console.log(newArray(15))


