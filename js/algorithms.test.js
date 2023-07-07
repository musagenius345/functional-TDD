import { describe, test, expect } from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest'
import { insertionSort, selectionSort, bubbleSort, binarySearch, linearSearch } from './algorithms.js'

describe('Selection Sort', () => {
  test('sorts an array of numbers in ascending order', () => {
    const unsortedArray = [9, 5, 1, 3, 8, 4, 2, 7, 6]
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(selectionSort(unsortedArray)).toEqual(sortedArray);
  })

  test('returns an empty array when given an empty array', () => {
    const emptyArray = []
    expect(selectionSort(emptyArray)).toEqual([]);
  })

  test('returns the same array when given an array with a single element', () => {
    const singleElementArray = [42]
    expect(selectionSort(singleElementArray)).toEqual([42]);
  })

})
describe('Insertion Sort', () => {
  test('sorts an array of numbers in ascending order', () => {
    const unsortedArray = [9, 5, 1, 3, 8, 4, 2, 7, 6]
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(insertionSort(unsortedArray)).toEqual(sortedArray);
  })

  test('returns an empty array when given an empty array', () => {
    const emptyArray = []
    expect(insertionSort(emptyArray)).toEqual([]);
  })

  test('returns the same array when given an array with a single element', () => {
    const singleElementArray = [42]
    expect(insertionSort(singleElementArray)).toEqual([42]);
  })

})
describe('Bubble Sort', () => {
  test('sorts an array of numbers in ascending order', () => {
    const unsortedArray = [9, 5, 1, 3, 8, 4, 2, 7, 6]
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(bubbleSort(unsortedArray)).toEqual(sortedArray);
  })

  test('returns an empty array when given an empty array', () => {
    const emptyArray = []
    expect(bubbleSort(emptyArray)).toEqual([]);
  })

  test('returns the same array when given an array with a single element', () => {
    const singleElementArray = [42]
    expect(bubbleSort(singleElementArray)).toEqual([42]);
  })

})

describe('linearSearch', () => {
  test('array must be ordered', () => {
    const arr1 = [9, 5, 8, 4, 2]
    expect(linearSearch(arr1, 6)).toBe(-1)
    expect(linearSearch(arr1, 2)).toBe(4)
  })
})

describe('binarySearch', () => {
  test('Efficiency of algorithm', () => {
    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(binarySearch(arr2, 8)).toBe(7)
  })
  test('Using selection sort', () => {
    const arr1 = [9, 5, 8, 4, 2]
    let result = selectionSort(arr1)
    expect(binarySearch(result, 2)).toBe(0)
  })
})