// Problem summary:

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Examples:
// Input: "A man, a plan, a canal: Panama"
// Output: true

const isPalindrome = (str) => {
  const normalized = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
};

console.log(isPalindrome("Lev el"));
