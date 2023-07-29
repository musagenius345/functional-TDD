export function getIntersection(arr1, arr2){
  let inter = []
  let hashTable = new Map()
  
  
  for (var i = 0; i < arr1.length; i++) {
    hashTable.set(arr1[i], true)
  }
  
  for (var j = 0; j < arr2.length; j++) {
    if (hashTable.has(arr2[j])) {
      inter = [arr2[j], ...inter]
    }
  }
  
  return inter
}




