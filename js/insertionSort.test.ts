import { describe, test, it, expect } from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest'
import { insertionSort } from './insertionSort'; // Assuming your implementation is in a separate file

describe('insertionSort', () => {
  test('should sort an unsorted array in ascending order', () => {
    const unsortedArray = [55, 22, 11, 8];
    const expectedSortedArray = [8, 11, 22, 55];

    const sortedArray = insertionSort(unsortedArray);

    expect(sortedArray).toEqual(expectedSortedArray);
  });

  test('should return the same array if it is already sorted', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const result = insertionSort(sortedArray);

    expect(result).toEqual(sortedArray);
  });

  test('should correctly sort an array with duplicate elements', () => {
    const unsortedArray = [5, 2, 8, 2, 1, 5, 2];
    const expectedSortedArray = [1, 2, 2, 2, 5, 5, 8];

    const sortedArray = insertionSort(unsortedArray);

    expect(sortedArray).toEqual(expectedSortedArray);
  });

  test('should correctly sort a large array', () => {
    const unsortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const expectedSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const sortedArray = insertionSort(unsortedArray);

    expect(sortedArray).toEqual(expectedSortedArray);
  });
});
