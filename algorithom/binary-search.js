// Problem Statement
// Given a sorted array of integers and a target value, determine if the target exists in the array using binary search algorithm.

// Examples:
// Input: array = [-1,0,3,5,9,12], target = 9
// Output: true

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return true;
    }
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

console.log([[-1, 0, 3, 5, 9, 12]]);
