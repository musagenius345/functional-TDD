function reverseString(
  str,
  reverse = "",
  end = str.length - 1,
  previous = end - 1,
) {
  if (end >= 0) {
    // Concatenate the last character of the substring to the 'reverse' variable
    reverse += str[end];
    // Recurse with updated 'end' and 'previous' values
    return reverseString(str, reverse, end - 1, previous - 1);
  } else {
    // Base case: return the reversed string when the end is negative
    return reverse;
  }
}

const input = "hello";
const reversed = reverseString(input);
console.log(reversed); // Output: "olleh"
