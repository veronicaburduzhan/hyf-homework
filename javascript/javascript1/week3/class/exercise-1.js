const goldenRetriever = {
  name: "Spot",
  color: "gold",
  size: "medium",
  age: 10,
  bark: true,
  owners: ["Tom", "Anna"],
};

const pug = {
  name: "Dog",
  color: "grey",
  size: "small",
  age: 0.7,
  bark: false,
  owners: ["Tom", "Anna"],
};

console.log(
  goldenRetriever.name +
    " is a " +
    goldenRetriever.age +
    " years old. " +
    "He is a golden retriever and a " +
    goldenRetriever.size +
    " size dog. He has a " +
    goldenRetriever.color +
    "."
);

function makeDog(name, color, size, age) {
    const newDog = {
        name: name,
        color: color,
        size: size,
        age: age
    }
    return newDog;
}

const spooky = makeDog("Spooky", "black", "small", "5")
console.log(`${spooky.name} is a doog dog who has ${spooky.color}.`);