// Problem Statement
const usersA = [
  { id: "u001", name: "Alice", country: "USA" },
  { id: "u002", name: "Bob", country: "Canada" },
  { id: "u003", name: "Charlie", country: "UK" },
  { id: "u004", name: "Diana", country: "Germany" },
  { id: "u005", name: "Ethan", country: "France" },
  { id: "u006", name: "Fiona", country: "Italy" },
  { id: "u007", name: "George", country: "Australia" },
  { id: "u008", name: "Hannah", country: "India" },
  { id: "u009", name: "Ian", country: "Brazil" },
  { id: "u010", name: "Julia", country: "Spain" },
  { id: "u011", name: "Kevin", country: "Netherlands" },
  { id: "u012", name: "Laura", country: "Mexico" },
  { id: "u013", name: "Mike", country: "USA" },
  { id: "u014", name: "Nora", country: "Canada" },
  { id: "u015", name: "Oscar", country: "UK" },
  { id: "u016", name: "Paula", country: "Germany" },
  { id: "u017", name: "Quinn", country: "France" },
  { id: "u018", name: "Rita", country: "Italy" },
  { id: "u019", name: "Sam", country: "Australia" },
  { id: "u020", name: "Tina", country: "India" },
];

const usersB = [
  { id: "u018", name: "Rita", country: "Italy" }, // common
  { id: "u020", name: "Tina", country: "India" }, // common
  { id: "u004", name: "Diana", country: "Germany" }, // common
  { id: "u012", name: "Laura", country: "Mexico" }, // common
  { id: "u002", name: "Bob", country: "Canada" }, // common
  { id: "u021", name: "Uma", country: "Norway" },
  { id: "u022", name: "Victor", country: "Sweden" },
  { id: "u023", name: "Wendy", country: "Denmark" },
  { id: "u024", name: "Xander", country: "Finland" },
  { id: "u025", name: "Yara", country: "Switzerland" },
  { id: "u026", name: "Zack", country: "Portugal" },
  { id: "u027", name: "Abby", country: "Greece" },
  { id: "u028", name: "Ben", country: "Poland" },
  { id: "u029", name: "Cara", country: "Turkey" },
  { id: "u030", name: "Derek", country: "Czech Republic" },
  { id: "u031", name: "Ella", country: "Austria" },
  { id: "u032", name: "Felix", country: "Hungary" },
  { id: "u033", name: "Grace", country: "Romania" },
  { id: "u034", name: "Henry", country: "Ireland" },
  { id: "u035", name: "Isla", country: "Belgium" },
];

// Given two users represented by their friend lists, find the mutual friends between them.

// O(n^2) solution
const findMutualFriends = (listA, listB) => {
  const startTime = performance.now();

  let mutualFriends = [];
  listA.map((user) => {
    listB.filter((friend) =>
      friend.id === user.id ? mutualFriends.push(user) : null
    );
  });

  const endTime = performance.now();
  return { mutualFriends, timeTaken: endTime - startTime };
};

// Optimized O(n) solution using Set
const findMutualFriendsOptimized = (listA, listB) => {
  const startTime = performance.now();
  const friendsSet = new Set();
  let mutualFriends = [];
  listA.forEach((user) => friendsSet.add(user.id));
  listB.forEach((user) => {
    if (friendsSet.has(user.id)) {
      mutualFriends.push(user);
    }
  });
  const endTime = performance.now();
  return { mutualFriends, timeTaken: endTime - startTime };
};

console.log(findMutualFriends(usersA, usersB));
console.log(findMutualFriendsOptimized(usersA, usersB));
