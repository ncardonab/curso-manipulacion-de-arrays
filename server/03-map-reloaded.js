const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true
  },
  {
    customerName: "Pablo",
    total: 120,
    delivered: false
  },
  {
    customerName: "Douglas",
    total: 180,
    delivered: true
  },
  {
    customerName: "Joe",
    total: 240,
    delivered: true
  }
];

console.log("original", orders);
const totals = orders.map((item) => item.total);
console.log(`new ${totals}`);

// const totals2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("new", totals2);
// console.log("original", orders);

const totals3 = orders.map((item) => {
  return { ...item, tax: 0.19 };
});
console.log("new", totals3);
console.log("original", orders);
