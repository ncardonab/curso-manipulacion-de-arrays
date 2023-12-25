const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" }
];

const update = {
  id: "🧇",
  changes: {
    price: "57",
    description: "A tasteful piece of waffle that'll make you drool"
  }
};

const burgerIndex = products.findIndex((item) => item.id === "🍔");

// products[burgerIndex] = {
//   ...products[burgerIndex],
//   ...update.changes
// };

// console.log(products);

// Remove element without modifying the original array
console.log(products.filter((item) => item.id !== "🍕"));

// Modify the array without modifying the original one
const newProducts = [...products];
newProducts[burgerIndex] = {
  ...newProducts[burgerIndex],
  ...update.changes
};
console.log(newProducts);
console.log(products);
