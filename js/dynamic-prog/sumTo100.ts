function addTo100(arr: number[]){
  if(arr.length===1){return arr[0]}

  if(arr[0] + addTo100(arr.slice(1)) > 100){
  return addTo100(arr.slice())
  }

  return addTo100(arr.slice(1))
}

const array1 = [1,99]
const array2 = [1,88,99]
const array3 = [1,88,12,99]
console.log(addTo100(array1));
console.log(addTo100(array2));
console.log(addTo100(array3));

