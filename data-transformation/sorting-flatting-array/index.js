// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

// Sort numbers in ascending order
const ascending = numbers.sort((a, b) => a - b);
console.log("Sorted numbers (ascending):", ascending);

// Sort numbers in descending order
const descending = numbers.sort((a, b) => b - a);
console.log("Sorted numbers (descending):", descending);

// Sort fruits in alphabetical order (case-insensitive)
const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));

// Sort fruits in alphabetical order (case-insensitive)
const sortedFruitsInLowercase = fruits
  .map((fruit) => fruit.toLowerCase())
  .sort((a, b) => a.localeCompare(b));

console.log("Sorted fruits (alphabetical):", sortedFruitsInLowercase);
