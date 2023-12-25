const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9]
];

function recursiveFlat(nestedList) {
  let flattenList = [];

  nestedList.forEach((element) => {
    if (Array.isArray(element))
      flattenList = flattenList.concat(recursiveFlat(element));
    else flattenList.push(element);
    // console.log(element);
  });

  return flattenList;
}

console.log(recursiveFlat(matriz));

const flattenList = matriz.flat(9);

console.log(flattenList);

const flatten = matriz.reduce(
  (accumulator, value) =>
    Array.isArray(value) ? accumulator.concat(value) : accumulator.push(value),
  []
);

console.log(flatten);
