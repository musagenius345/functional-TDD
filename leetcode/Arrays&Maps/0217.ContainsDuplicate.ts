export function containsDuplicate(nums: number[]): boolean {
  const numMap = new Map();

  for (const num of nums) {
    if (numMap.has(num)) {
      return true; // Found a duplicate
    }
    numMap.set(num, true);
  }

  return false; // No duplicates found
}

export function containsDuplicateTwo(nums: number[]): boolean {
  const set = new Set(nums);
  if (set.size === nums.length) {
    return false;
  } else {
    return true;
  }
}

export function containsDuplicateThree(nums: number[]): boolean {
  const numSet = new Set();
  return nums.some((num) => {
    if (numSet.has(num)) {
      return true; // Found a duplicate
    }
    numSet.add(num);
    return false;
  });
}
