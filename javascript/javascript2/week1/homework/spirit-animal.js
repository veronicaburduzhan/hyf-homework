const spiritAnimals = [
  "The lazy panda",
  "The running rabbit",
  "The wise owl",
  "The fullmoon wolf",
  "The crying butterfly",
  "The king lion",
  "The cunning fox",
  "The busy bee",
  "The fluffy cat",
  "The black sheep",
];

//const answer = document.createElement("p");
const answer = document.getElementById("answer");
const inputField = document.getElementById("username");
const myButton = document.getElementById("mybutton");
const radioByClick = document.getElementById("byclick");
const radioByHoverOver = document.getElementById("byhoverover");
const radioByFillOut = document.getElementById("byfillout");

myButton.addEventListener("click", myFunction);
function myFunction() {
    const username = document.getElementById("username").value.trim();
    if (username === "" || username === undefined) {
         myButton.innerText = "Get your spirit animal";
        answer.innerHTML = `Please, enter your name in the field first!`
    } else {
        myButton.innerText = "Get another spirit animal"
        let spiritAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
        answer.innerHTML = `${username} - ${spiritAnimal}`;
    }
}

myButton.addEventListener("click", function () {
  if (radioByClick.checked) {
    myFunction();
  }
});
inputField.addEventListener("mouseover", function () {
  if (radioByHoverOver.checked) {
    myFunction();
  }
});