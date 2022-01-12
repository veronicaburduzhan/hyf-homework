const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "Kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
const removedItem = names.splice(names.indexOf("Ahmad"), 1)
console.log(names); // ['Peter', 'Yana', 'Kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']
