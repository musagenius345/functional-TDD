// import { describe, test, expect } from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest'

import { partition, SortableArray, quickSort } from "./index.js";

describe("Sorting by partition", () => {
  test("does it sort correctly", () => {
    const arr01 = [32, 98, 450, 22, 86, 44, 12, 9];
    const result = partition(arr01);
    expect(result).to.equal(arr01.sort((a, b) => a - b));
  });

  test("Using sortable arrays", () => {
    const unsortedArray = [3, 6, 1, 8, 2, 4];
    const sortedJS = unsortedArray.sort((a, b) => a - b);
    const sortableArray = new SortableArray(unsortedArray);
    const sortedArray = sortableArray.sort();
    expect(sortedArray).to.equal(sortedJS);
  });
});

describe("Quick Sort", () => {
  it("should sort an empty array", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("should sort an array with one element", () => {
    expect(quickSort([1])).toEqual([1]);
  });

  it("should sort an already sorted array", () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array in reverse order", () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort a random unsorted array", () => {
    expect(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });

  it("should not modify the original array", () => {
    const unsortedArray = [3, 1, 4, 1, 5];
    const sortedArray = quickSort([...unsortedArray]);
    expect(unsortedArray).toEqual([3, 1, 4, 1, 5]); // Original array should remain unchanged
  });

  it("should sort a large array", () => {
    const largeArray = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000),
    );
    const sortedArray = quickSort([...largeArray]).sort((a, b) => a - b);
    expect(quickSort(largeArray)).toEqual(sortedArray);
  });
});
