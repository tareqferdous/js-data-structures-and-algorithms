// Problem Statement

// Implement a simple in memory cache for an expensive function (like a database query or API call).
// The goal is to store the result of a function call, so that if the same call is made again,
// the cached result is returned instead of executing the function again.

// In-Memory Cache
const cache = new Map();

const expensiveFunction = (id) => {
  console.log(`Expensive task occur...`);
  return {
    id: id,
    data: `Data for ID: ${id}`,
    timestamp: new Date().getTime(),
  };
};

const getData = (id) => {
  // check if data is in cache
  if (cache.has(id)) {
    console.log(`Fetching from cache for ID: ${id}`);
    return cache.get(id);
  }
  // call expensive function if not in cache
  const result = expensiveFunction(id);
  cache.set(id, result); // store result in cache
  return result;
};

// Example Usage
console.log(getData(1));
console.log(getData(2));
console.log(getData(1));
