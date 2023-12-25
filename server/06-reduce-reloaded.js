const playersLevels = [
  {
    name: "Nicolas",
    level: "Pro"
  },
  {
    name: "Andreas",
    level: "medium"
  },
  {
    name: "Zula",
    level: "hight"
  },
  {
    name: "Rick",
    level: "low"
  },
  {
    name: "Valentine",
    level: "medium"
  },
  {
    name: "Lucy",
    level: "hight"
  }
];

const levelsHistogram = playersLevels.reduce((object, player) => {
  object[player.level] = !object[player.level] ? 1 : object[player.level] + 1;
  return object;
}, {});

console.log(levelsHistogram);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ranges = [
  [1, 5],
  [6, 8],
  [9, 10]
];

const isBetween = (number, lowerLimit, upperLimit) =>
  number >= lowerLimit && number <= upperLimit;

const numbersInRanges = numbers.reduce((object, number) => {
  ranges.forEach(([lowerLimit, upperLimit]) => {
    if (isBetween(number, lowerLimit, upperLimit)) {
      if (!object[`${lowerLimit}-${upperLimit}`]) {
        object[`${lowerLimit}-${upperLimit}`] = 1;
      } else {
        object[`${lowerLimit}-${upperLimit}`]++;
      }
      //   object[`${lowerLimit}-${upperLimit}`] = !object[
      //     `${lowerLimit}-${upperLimit}`
      //   ]
      //     ? 1
      // : object[`${lowerLimit}-${upperLimit}`]++;
    }
  });
  return object;
}, {});
console.log(numbersInRanges);
