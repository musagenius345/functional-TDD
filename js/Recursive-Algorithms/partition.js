/**
 * @param {Array} arr
 */
export function partition(arr) {
  const pivot = arr[arr.length - 1]; // Choose the rightmost element as the pivot
  let leftIndex = 0;
  let rightIndex = arr.length - 2;

  while (leftIndex <= rightIndex) {
    const left = arr[leftIndex];
    const right = arr[rightIndex];

    if (left < pivot) {
      leftIndex++;
    } else if (right > pivot) {
      rightIndex--;
    } else {
      [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
      leftIndex++;
      rightIndex--;
    }
  }

  // Swap the pivot into its correct position
  [arr[leftIndex], arr[arr.length - 1]] = [arr[arr.length - 1], arr[leftIndex]];

  return arr;
}
