// import { describe, test, expect } from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest'

import { partition, SortableArray, quickSort } from 'index'

describe('Sorting by partition', () => {
  test('does it sort correctly', () => {
    const arr01 = [32, 98, 450, 22, 86, 44, 12, 9];
    const result = partition(arr01)
    expect(result).to.equal(arr01.sort((a, b) => a - b))
  })

  test('Using sortable arrays', () => {
    const unsortedArray = [3, 6, 1, 8, 2, 4];
    const sortedJS = unsortedArray.sort((a, b) => a - b)
    const sortableArray = new SortableArray(unsortedArray);
    const sortedArray = sortableArray.sort();
    expect(sortedArray).to.equal(sortedJS)
  })
})

describe('QuickSort', () => {
  test('basic', () => {
    const sample = [4, 9, 8, 1, 6, 7, 3, 5, 2]
    const result = quickSort(sample)
    const solution = sample.sort((a, b) => a - b)
    expect(result).toStrictEqual(solution)
  })
  test('negative values', () => {
    const sample = [-4, -9, -8, -1, -6, -7, -3, -5, -2]
    const result = quickSort(sample)
    const solution = sample.sort((a, b) => a - b)
    expect(result).toStrictEqual(solution)
  })
  test('Infinity', () => {
    const sample = [Infinity, -9, -Infinity, -1, -6, -7, -3, -5, -2]
    const result = quickSort(sample)
    const solution = sample.sort((a, b) => a - b)
    expect(result).toStrictEqual(solution)
  })
})