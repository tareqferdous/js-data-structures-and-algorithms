// Count subtotal

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subTotal = cartItems.reduce((subtotal, item) => {
  return subtotal + item.price * item.quantity;
}, 0);

// Find best scorer

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
  if (player.score > bestPlayer.score) {
    return player;
  }
  return bestPlayer;
}, players[0]);

console.log("Subtotal:", subTotal);
console.log("Best Scorer:", bestScorer);

//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const salesByCategory = sales.reduce((salesTable, sale) => {
  console.log(salesTable + ":" + sale);
  const { category, price, quantity } = sale;

  if (!salesTable[category]) {
    salesTable[category] = { totalRevenue: 0, totalItems: 0 };
  }
  salesTable[category].totalRevenue += price * quantity;
  salesTable[category].totalItems += quantity;

  return salesTable;
}, {});

console.log("salesByCategory", salesByCategory);

//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

//? input
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

const usersWithPosts = users.reduce((acc, user) => {
  const userPosts = posts.filter((post) => post.userId === user.id);
  acc.push({ ...user, posts: userPosts });
  return acc;
}, []);

console.log("usersWithPosts", usersWithPosts);
