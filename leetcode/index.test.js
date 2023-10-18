import { addTwoNumbers, ListNode, addTwoNumbersRecursive, lengthOfLongestSubstringMap, lengthOfLongestSubstring } from './index.js';

describe('addTwoNumbers', () => {
  it('adds two numbers correctly', () => {
    // Test Case 1
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const expectedSum1 = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(addTwoNumbers(l1, l2)).toEqual(expectedSum1);

    // Test Case 2
    const l3 = new ListNode(0);
    const l4 = new ListNode(0);
    const expectedSum2 = new ListNode(0);
    expect(addTwoNumbers(l3, l4)).toEqual(expectedSum2);

    // Test Case 3
    const l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    const l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    const expectedSum3 = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))));
    expect(addTwoNumbers(l5, l6)).toEqual(expectedSum3);
  });

  it('handles edge cases', () => {
    // Test Case: One list is empty
    const l1 = null;
    const l2 = new ListNode(1);
    expect(addTwoNumbers(l1, l2)).toEqual(l2);

    // Test Case: Both lists are empty
    expect(addTwoNumbers(null, null)).toBeNull();
  });
});

//Recursive addTwoNumbers
describe('addTwoNumbersRecursive', () => {
  it('adds two numbers correctly', () => {
    // Test Case 1
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const expectedSum1 = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(addTwoNumbersRecursive(l1, l2)).toEqual(expectedSum1);

    // Test Case 3
    const l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    const l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    const expectedSum3 = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))));
    expect(addTwoNumbersRecursive(l5, l6)).toEqual(expectedSum3);
  });

  it('handles edge cases', () => {
    // Test Case: One list is empty
    const l1 = null;
    const l2 = new ListNode(1);
    expect(addTwoNumbersRecursive(l1, l2)).toEqual(l2);

    // Test Case: Both lists are empty
    expect(addTwoNumbersRecursive(null, null)).toBeNull();
  });
});

function lengthOfLongestSubstringTest(func, name) {
  describe(`${name}`, () => {
    // Test cases for empty string
    test('Empty string should return 0', () => {
      expect(func('')).toBe(0);
    });

    // Test cases for strings with unique characters
    test('String with unique characters should return its length', () => {
      expect(func('abcde')).toBe(5);
      expect(func('12345')).toBe(5);
    });

    // Test cases for strings with repeating characters
    test('String with repeating characters should return length of longest substring without repeating characters', () => {
      expect(func('pwwkew')).toBe(3); // Longest substring without repeating characters: 'wke'
      expect(func('bbbbb')).toBe(1); // Longest substring without repeating characters: 'b'
      expect(func('abcabcbb')).toBe(3); // Longest substring without repeating characters: 'abc'
    });

    // Additional test cases with various characters and lengths
    test('String with mix of characters should return correct result', () => {
      expect(func('a b c d e')).toBe(3); // Longest substring without repeating characters: 'a '
      expect(func('112233 44 55')).toBe(3); // Longest substring without repeating characters: ' 44'
    });

    // Edge case tests
    test('String with maximum length should execute within time limits', () => {
      const maxLengthString = 'a'.repeat(5 * 10 ** 4);
      expect(func(maxLengthString)).toBe(1); // All characters are the same, so the length is 1
    });

    test('String with single character should return 1', () => {
      expect(func('a')).toBe(1);
    });
  });
}

lengthOfLongestSubstringTest(lengthOfLongestSubstringMap, 'lengthOfLongestSubstringMap')
lengthOfLongestSubstringTest(lengthOfLongestSubstring, 'lengthOfLongestSubstring')