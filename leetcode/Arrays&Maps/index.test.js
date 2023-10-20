import { containsDuplicate, containsDuplicateTwo, containsDuplicateThree, isAnagram } from 'index.js'


describe('isAnagram function', () => {
    test('Example 1: "anagram" and "nagaram"', () => {
        expect(isAnagram('anagram', 'nagaram')).toBe(true);
    });

    test('Example 2: "rat" and "car"', () => {
        expect(isAnagram('rat', 'car')).toBe(false);
    });

    test('Empty strings should be anagrams', () => {
        expect(isAnagram('', '')).toBe(true);
    });

    test('Anagrams with different lengths should return false', () => {
        expect(isAnagram('listend', 'silent')).toBe(false);
    });

    test('Anagrams with same characters but different frequencies should return false', () => {
        expect(isAnagram('aab', 'abb')).toBe(false);
    });

    test('Long anagrams with same characters and frequencies', () => {
        const s = 'a'.repeat(50000) + 'b'; // String of length 50001 with 50000 'a's and 1 'b'
        const t = 'b' + 'a'.repeat(50000); // String of length 50001 with 1 'b' and 50000 'a's
        expect(isAnagram(s, t)).toBe(true);
    });
});


//containsDuplicateTest(containsDuplicate, 'containsDuplicate with Map')
// containsDuplicateTest(containsDuplicate, 'containsDuplicate with Set only')
// containsDuplicateTest(containsDuplicate, 'containsDuplicate with Set and some hof')









function containsDuplicateTest(func, name) {
  describe(name, () => {
    describe('Functionality Tests', () => {
      test('Should return true for array with duplicates', () => {
        expect(func([1, 2, 3, 1])).toBe(true);
      });

      test('Should return false for array without duplicates', () => {
        expect(func([1, 2, 3, 4])).toBe(false);
      });
    });

    describe('Edge Cases', () => {
      test('Empty array should return false', () => {
        expect(func([])).toBe(false);
      });

      test('Array with single element should return false', () => {
        expect(func([1])).toBe(false);
      });

      test('Array with large number of elements without duplicates should return false', () => {
        const largeArray = Array.from({ length: 1000000 }, (_, index) => index + 1);
        expect(func(largeArray)).toBe(false);
      });

      test('Array with large number of elements with duplicates should return true', () => {
        const largeArrayWithDuplicates = Array.from({ length: 1000000 }, (_, index) => index % 500000 + 1);
        expect(func(largeArrayWithDuplicates)).toBe(true);
      });
    });

    
  });
}