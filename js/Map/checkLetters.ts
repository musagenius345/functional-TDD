export function checkLetters(str) {
  let hashTable = new Map();
  let missing = [];

  for (let i = 0; i < str.length; i++) {
    hashTable.set(str[i], true);
  }

  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let j = 0; j < alphabets.length; j++) {
    if (!hashTable.has(alphabets[j])) {
      missing.push(alphabets[j]);
    }
  }
  return missing;
}
