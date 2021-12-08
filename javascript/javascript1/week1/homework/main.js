//FREECODECAMP
console.log("My FreeCodeCamp username is @veronika_burduzhan");

//AGE-IFY (A future age calculator)
const yearOfBirth = 1993; /* this variable is static */
let yearFuture = 2027; /* this variable can be reassigned */
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture + ".");

//GOODBOY-OLDBOY (A dog age calculator)
const dogYearOfBirth = 2020;
let dogYearFuture = 2027;
const dogYearCalc = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = false; /* Assigned as false to see calculation inside condition statement */
if (shouldShowResultInDogYears === true) {
    console.log("Your dog will be " + dogYearCalc + " years old in " + dogYearFuture + ".");
} else {
    console.log("Your dog will be " + (dogYearCalc * 7) + " years old in " + dogYearFuture + ".");
}


//HOUSEY PRICEY (A house price estimator)
//Calculation for Peter
const wideOfHouse = [8, 5];
const deepOfHouse = [10, 11];
const highOfHouse = [10, 8];
const gardenSizeInM2 = [100, 70];
const priceOfHouse = [2500000, 1000000];

const volumeInMetersPeter = wideOfHouse[0] * deepOfHouse[0] * highOfHouse[0];

const housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2[0] * 300; /* Calculates an average price for this type of houses */

if (housePricePeter >= priceOfHouse[0]) {
  console.log("Peter, you found a good deal! " + "Average price for this type of houses is: " + housePricePeter + ".");
} else {
  console.log("Peter, this is ridiculous! This house is overpriced! Average price for this type of houses is: " + housePricePeter + ".");
}

//Calculation for Julia

const volumeInMetersJulia = wideOfHouse[1] * deepOfHouse[1] * highOfHouse[1];

const housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2[1] * 300; /* Calculates an average price for this type of houses */

if (housePriceJulia >= priceOfHouse[1]) {
  console.log("Julia, you found a good deal! " + "Average price for this type of houses is: " + housePriceJulia + ".");
} else {
  console.log("Julia, this is ridiculous! This house is overpriced! Average price for this type of houses is: " + housePriceJulia + ".");
}

//EZ NAMEY (Startup name generator)
const firstWords = [/* Declares array consisted with first words */
  "Easy",
  "Awesome",
  "Petite",
  "Undefeated",
  "Supreme",
  "Private",
  "Public",
  "Crazy",
  "Precious",
  "Dreamy",
]; 
const secondWords = [/* Declares array consisted with second words */
  "Corporation",
  "Brand",
  "Studio",
  "Group",
  "Enterprise",
  "Desk",
  "Bureau",
  "Department",
  "Branch",
  "Office",
]; 
const randomNumber = Math.floor(Math.random() * 10); /* Generates random numbers */

const startupName =
  firstWords[randomNumber] + " " + secondWords[randomNumber]; /* Creates a random startup name */
const startupNameLength = startupName.length; /* Calculates a number of characters */

console.log("The startup: " + '"' + startupName + '"' + " contains " + startupNameLength + " characters.");
