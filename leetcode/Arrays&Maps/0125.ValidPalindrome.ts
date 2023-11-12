export function isPalindrome(s: string) {
  const clean = s.toLowerCase().replace(/[\W_]/g, "");

  const reverseWord = clean.split("").reverse().join("");

  return clean === reverseWord;
}

export function isPalindromeTwo(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(char: string): boolean {
  return /^[0-9a-zA-Z]$/.test(char);
}

// const strOne = 'A man, a plan, a canal: Panama'
const strTwo = "a_b";
// console.log(isPalindrome(strOne));
console.log(isPalindrome(strTwo));
