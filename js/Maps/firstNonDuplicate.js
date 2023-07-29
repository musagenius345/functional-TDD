export function firstNonDuplicate(str){
  let hashTable = new Map()
  
  for (let i = 0; i < str.length; i++) {
    let count = 1
    if (hashTable.has(str[i])) {
      hashTable.set(str[i], count+=1)
    } else {
      hashTable.set(str[i], count)
    }
  }
  
  for (var j = 0; j < str.length; j++) {
    if(hashTable.get(str[j]) == 1) {
      return str[j]
    }
  }
}


