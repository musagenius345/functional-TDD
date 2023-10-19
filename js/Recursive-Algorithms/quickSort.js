/**
 * Quick sort Implementation
 * @param {Array} arr
 * */
export function quickSort(arr) {
  // Base case: an array with 0 or 1 element is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Median-of-three pivot selection
  const first = arr[0];
  const middle = arr[Math.floor(arr.length / 2)];
  const last = arr[arr.length - 1];

  // Calculate the median among the three elements
  let median;
  if (
    (first <= middle && middle <= last) ||
    (last <= middle && middle <= first)
  ) {
    median = middle;
  } else if (
    (middle <= first && first <= last) ||
    (last <= first && first <= middle)
  ) {
    median = first;
  } else {
    median = last;
  }

  // Swap the median element to the end of the array
  const pivotIndex = arr.indexOf(median);
  [arr[pivotIndex], arr[arr.length - 1]] = [
    arr[arr.length - 1],
    arr[pivotIndex],
  ];

  let leftIndex = 0;
  let rightIndex = arr.length - 2;

  while (leftIndex <= rightIndex) {
    let left = arr[leftIndex];
    let right = arr[rightIndex];
    if (left < median) {
      leftIndex++;
    } else if (right >= median) {
      rightIndex--;
    } else {
      [arr[rightIndex], arr[leftIndex]] = [arr[leftIndex], arr[rightIndex]];
    }
  }

  // Swap the pivot element back to its correct sorted position
  [arr[leftIndex], arr[arr.length - 1]] = [arr[arr.length - 1], arr[leftIndex]];

  // Recursively sort the left and right partitions
  let leftPartition = quickSort(arr.slice(0, leftIndex));
  let rightPartition = quickSort(arr.slice(leftIndex + 1));

  // Concatenate the left partition, pivot, and right partition to get the sorted array
  return [...leftPartition, arr[leftIndex], ...rightPartition];
}

// const result = quickSort([4, 9, 8, 1, 6, 7, 3, 5, 2]);
// console.log(result);
