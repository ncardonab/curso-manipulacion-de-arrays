const pythonZen = [
  " Beautiful is better than ugly",
  " Explicit is better than implicit ",
  "Simple is better than complex",
  "Complex is better than complicated "
];

const emptyList = [];

function countWords(phrasesList) {
  return phrasesList.reduce((accumulator, phrase) => {
    accumulator += phrase.trim().split(" ").length;
    return accumulator;
  }, 0);
}

console.log(countWords(pythonZen));
console.log(countWords(emptyList));

function countWordFlatMap(phrasesList) {
  return phrasesList.flatMap((phrase) => phrase.trim().split(" ")).length;
}

console.log(countWordFlatMap(pythonZen));
console.log(countWordFlatMap(emptyList));
