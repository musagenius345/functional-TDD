export function lengthOfLongestSubstring(s: string): number {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}


export function lengthOfLongestSubstringMap(s: string): number {
    if (!s) return 0;

    let maxLength = 0;
    let left = 0;
    let charIndexMap = new Map<string, number>();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (charIndexMap.has(char) && charIndexMap.get(char)! >= left) {
            left = charIndexMap.get(char)! + 1;
        }
        charIndexMap.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}