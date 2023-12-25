const pets = ["cat", "dog", "bat"];

const isThereAtLeastOneDog = pets.includes("dog");
console.log(isThereAtLeastOneDog);

const title = "Curso de manipulación de arrays";

// since str.replaceAll() function only exists on nodejs version 15+, a workaround is to use a regex
const urlFinal = String(title).replace(/ /g, "-").toLowerCase();
console.log(urlFinal);
