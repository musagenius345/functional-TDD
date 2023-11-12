// Best
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false; // Anagrams must have the same length
  }

  const charFrequency: number[] = new Array(26).fill(0); // Assuming lowercase English letters

  // Count character frequencies for string s
  for (let i = 0; i < s.length; i++) {
    charFrequency[s.charCodeAt(i) - 97]++; // 'a' has ASCII code 97, so we subtract it to get the index
    charFrequency[t.charCodeAt(i) - 97]--; // Decrement for string t
  }

  // If the strings are anagrams, charFrequency array will contain only zeros
  return charFrequency.every((freq) => freq === 0);
}

// Average
function isAnagramTwo(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false; // Anagrams must have the same length
  }

  const charFrequency: Map<string, number> = new Map();

  // Count character frequencies for string s
  for (let char of s) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  // Decrement character frequencies for string t
  for (let char of t) {
    if (!charFrequency.has(char)) {
      return false; // Character not in s, not an anagram
    }
    charFrequency.set(char, charFrequency.get(char)! - 1);
    if (charFrequency.get(char)! === 0) {
      charFrequency.delete(char);
    }
  }

  // If charFrequency is empty, the strings are anagrams
  return charFrequency.size === 0;
}

// Worst
function isAnagramThree(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
