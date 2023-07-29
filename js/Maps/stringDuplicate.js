export function stringDuplicate(arr) {
  let hashTable = new Map()

  for (let i = 0; i < arr.length; i++) {
    if (hashTable.has(arr[i])) {
      return arr[i]
    } else {
      hashTable.set(arr[i], true)
    }
  }
}


