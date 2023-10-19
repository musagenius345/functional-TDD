import {
  generateRandomArray,
  quickSort,
  insertionSort,
  selectionSort,
  bubbleSort,
  binarySearch,
  linearSearch,
} from "./algorithms";

// Test cases for sorting algorithms
const testSortingAlgorithm = (
  sortingFunction,
  algorithmName,
  arraySize = 500,
) => {
  describe(algorithmName, () => {
    test("sorts an array of numbers in ascending order", () => {
      const unsortedArray = [9, 5, 1, 3, 8, 4, 2, 7, 6];
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      expect(sortingFunction(unsortedArray)).toEqual(sortedArray);
    });

    test("returns an empty array when given an empty array", () => {
      const emptyArray = [];
      expect(sortingFunction(emptyArray)).toEqual([]);
    });

    test("returns the same array when given an array with a single element", () => {
      const singleElementArray = [42];
      expect(sortingFunction(singleElementArray)).toEqual([42]);
    });
    test(`sorts a large random array of size ${arraySize} in ascending order`, () => {
      const unsortedArray = generateRandomArray(arraySize);
      const sortedArray = [...unsortedArray].sort((a, b) => a - b);
      const sortedByAlgorithm = sortingFunction([...unsortedArray]);
      expect(sortedByAlgorithm).toEqual(sortedArray);
    });
  });
};

testSortingAlgorithm(selectionSort, "Selection Sort");
testSortingAlgorithm(insertionSort, "Insertion Sort");
testSortingAlgorithm(bubbleSort, "Bubble Sort");
testSortingAlgorithm(quickSort, "Quick Sort");

// Additional tests for linearSearch and binarySearch
describe("linearSearch", () => {
  test("array must be ordered", () => {
    const arr1 = [9, 5, 8, 4, 2];
    expect(linearSearch(arr1, 6)).toBe(-1);
    expect(linearSearch(arr1, 2)).toBe(4);
  });
});

describe("binarySearch", () => {
  test("Efficiency of algorithm", () => {
    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(arr2, 8)).toBe(7);
  });

  test("Using selection sort", () => {
    const arr1 = [9, 5, 8, 4, 2];
    let result = selectionSort(arr1);
    expect(binarySearch(result, 2)).toBe(0);
  });
});
