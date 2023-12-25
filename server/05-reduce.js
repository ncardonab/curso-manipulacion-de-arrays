const numbers = [5, 6, 7, 4, 5, 7, 10, 10, 23, 4, 31, 14];

const sumOfNumbers = numbers.reduce((sum, number) => sum + number, 0);

console.log("Sum of numbers using reduce: " + sumOfNumbers);

const numbersHistogram = numbers.reduce((object, number) => {
  object[number] = !object[number] ? 1 : object[number] + 1;
  return object;
}, {});

console.log(numbersHistogram);
