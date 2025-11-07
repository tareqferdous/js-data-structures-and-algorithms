import Stack from "../data-structure/stack.js";

// Problem statement

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets are closed by the same type of brackets.
// 2. Open brackets are closed in the correct order.

// Input and Output Examples:
// bracketChecker("()") -> true
// bracketChecker("()[]{}") -> true
// bracketChecker("(]") -> false
// bracketChecker("([)]") -> false
// bracketChecker("{[]}") -> true

const bracketChecker = (str) => {
  const stack = new Stack();

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty()) {
        return false;
      }
      const expectedOpenBracket = bracketMap[char];
      const gotOpenBracket = stack.pop();
      if (gotOpenBracket !== expectedOpenBracket) {
        return false;
      }
    }
  }
  return stack.isEmpty();
};

console.log(bracketChecker("()[]{}"));
