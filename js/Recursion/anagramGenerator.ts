function anagramsOf(string: string): string[] {
  // Base case: if the string is only one character,
  // return an array containing just a single-character string:
  if (string.length === 1) {
    return [string[0]];
  }

  // Create an array to hold all the anagrams:
  const collection = [];

  // Find all anagrams of the substring from the second character until
  // the end. For example, if the string is "abcd", the substring is "bcd",
  // so we'll find all anagrams of "bcd":
  const substringAnagrams = anagramsOf(string.slice(1));

  // Iterate over each substring anagram:
  substringAnagrams.forEach((substringAnagram) => {
    // Iterate over each index of the substring, from 0 until
    // one index past the end of the string:
    for (let index = 0; index <= substringAnagram.length; index++) {
      // Create a copy of the substring anagram:
      const copy = substringAnagram.split("");

      // Insert the first character of our string into the
      // substring anagram copy. Where it will go depends
      // on the index we're up to within this loop.
      copy.splice(index, 0, string[0]);

      // Then, take this new string and add it to our collection of anagrams:
      collection.push(copy.join(""));
    }
  });

  // Return the entire collection of anagrams:
  return collection;
}

console.log(anagramsOf("abcd"));
