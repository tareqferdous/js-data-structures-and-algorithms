// Problem Statement
// Given an array of integers numbers and an integer target, return indices of the two numbers such that they add up to target.
// if there is no solution return undefined

// Example:
// Input: numbers = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because numbers[0] + numbers[1] == 9, we return [0, 1].

const twoSum = (numbers, target) => {
  const numMap = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const complement = target - currentNum;

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(currentNum, i);
  }

  return undefined;
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
