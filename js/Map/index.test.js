// import {
//   describe,
//   it,
//   expect /* test  */,
// } from "/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest";
import {
  isSubset,
  checkLetters,
  firstNonDuplicate,
  stringDuplicate,
  getIntersection,
} from "./index";

describe("checkLetters", () => {
  it("accepts a string that contains all the letters of the alphabet except one and returns the missing letter", () => {
    const string = "the quick brown box jumps over a lazy dog";
    let result = checkLetters(string);
    expect(result).toStrictEqual(["f"]);
  });
});

describe("firstNonDuplicate", () => {
  it("returns the first non-duplicated character in a string.", () => {
    let word = "minimum";
    const result = firstNonDuplicate(word);
    expect(result).toBe("n");
  });
});

describe("String Duplicate", () => {
  it("accepts an array of strings and returns the first duplicate value it finds", () => {
    let arr2 = ["a", "b", "c", "d", "c", "e", "f"];
    let result = stringDuplicate(arr2);
    expect(result).toBe("c");
  });
});

describe("Get Intersection", () => {
  let arr1 = [6, 7, 8, 41];
  let arr2 = [6, 7, 8, 9, 10, 1];
  let arr3 = [67, 72, 80, 91, 90, 51];
  it("returns the intersection array that contains all values contained within the first two arrays.", () => {
    let result1 = getIntersection(arr1, arr2);
    expect(result1).toStrictEqual([8, 7, 6]);
  });

  it("No intersection", () => {
    let result2 = getIntersection(arr1, arr3);
    expect(result2).toStrictEqual([]);
  });
});

describe("Subset", () => {
  let arr1 = ["a", "b", "c", "d", "e", "f"];
  let arr2 = ["b", "d", "f"];
  let arr3 = ["x", "y", "z"];
  it("determine whether one array is a subset of another array", () => {
    let result1 = isSubset(arr1, arr2);
    expect(result1).toBeTruthy();
  });
  it("can handle complements", () => {
    let result2 = isSubset(arr1, arr3);
    expect(result2).toBeFalsy();
  });
});
