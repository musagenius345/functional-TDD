/**
 * @param {string} str 
 */
function anagramsOf(str) {
  if (str.length ===  1) {
    return str[0]
  }

  /** @type string */
  let collection = []
 
  let substringAnagrams = anagramsOf(str.slice(1))

  substringAnagrams.forEach(substringAnagram => {
    for (let index = 0; index < substringAnagram.length; index++) {
      const copy = substringAnagram.split('');
      
     copy.splice(index, 0, string[0]) 
      collection.push(copy.join(''))
      
    }
  });

  return collection
}


