import { describe, test, expect } from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest'
import { bubbleSort } from './bubbleSort.js'
import { linearSearch } from './orderArray.js'

describe('Bubble Sort', () => {
  test('sorts an array of numbers in ascending order', () => {
    const unsortedArray = [9, 5, 1, 3, 8, 4, 2, 7, 6];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(bubbleSort(unsortedArray)).toEqual(sortedArray);
  });

  test('returns an empty array when given an empty array', () => {
    const emptyArray = [];

    expect(bubbleSort(emptyArray)).toEqual([]);
  });

  test('returns the same array when given an array with a single element', () => {
    const singleElementArray = [42];

    expect(bubbleSort(singleElementArray)).toEqual([42]);
  });

});



describe('Order array', () => {
  test('array mist be ordered', () => {
    const arr1 = [9, 5, 8, 4, 2]
    const arr2 = [2, 4, 5, 8, 9]
    expect(linearSearch(arr1, 6)).toBe("6 does not exist in array")
  })
})