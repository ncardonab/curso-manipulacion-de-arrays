const words = ["spray", "elites", "limit", "apple", "exuberant"];
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
const filteredWords = words.filter((word) => word.length > 6);

console.log(filteredWords);

const thoseWhoAreDeliveredAndBiggerThan100 = orders.filter(
  (order) => order.delivered && order.total > 100
);

console.log(thoseWhoAreDeliveredAndBiggerThan100);

const search = (query) =>
  orders.filter((order) => order.customerName.includes(query));

console.log(search("a"));
