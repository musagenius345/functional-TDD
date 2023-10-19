export function isSubset(array1, array2) {
  let hashTable = new Map();
  let largerArray;
  let smallerArray;

  if (array1.length > array2.length) {
    largerArray = array1;
    smallerArray = array2;
  } else {
    largerArray = array2;
    smallerArray = array1;
  }

  for (const value of largerArray) {
    hashTable.set(value, true);
  }

  for (const value of smallerArray) {
    if (!hashTable.has(value)) {
      return false;
    }
  }
  return true;
}
