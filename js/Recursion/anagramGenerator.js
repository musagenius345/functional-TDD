function anagramsOf(string) { 
  if (string.length == 1) {
    return [string[0]]
  }
  
  let collection = []
  let substringAnagrams = anagramsOf(string.slice(1))
  substringAnagrams.forEach(substringAnagram => {
    for (let i = 0; i < substringAnagram.length; i++) {
      const copy = new String(substringAnagram)
      collection.push(copy)
    }
  })
  
  return collection
}


console.log(anagramsOf('abcd'));