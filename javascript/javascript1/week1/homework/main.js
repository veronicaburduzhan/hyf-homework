//FREECODECAMP
console.log("My FreeCodeCamp username is @veronika_burduzhan")

//AGE-IFY (A future age calculator)
const yearOfBirth = 1993; /* this variable is static */
let yearFuture = 2027; /* this variable can be reassigned */
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture + ".")


//GOODBOY-OLDBOY (A dog age calculator)
const dogYearOfBirth = 2020;
let dogYearFuture = 2027;
const dogYearCalc = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = false; /* Assigned as false to see calculation inside condition statement */
if (shouldShowResultInDogYears === true) {
    console.log("You will be " + dogYearCalc + " years old in " + dogYearFuture + ".");
} else {
    console.log("You will be " + (dogYearCalc * 7) + " years old in " + dogYearFuture + ".");
}


//HOUSEY PRICEY (A house price estimator)
//Calculation for Peter
const wideOfHouseP = 8;
const deepOfHouseP = 10;
const highOfHouseP = 10;
const gardenSizeInM2P = 100;
const priceOfHouseP = 2500000;
const volumeInMetersP = wideOfHouseP * deepOfHouseP * highOfHouseP; 

const housePriceP = volumeInMetersP * 2.5 * 1000 + gardenSizeInM2P * 300; /* Calculates an average price for this type of houses */

if (housePriceP >= priceOfHouseP) {
    console.log("Peter, you found a good deal! " + "Average price for this type of houses is: " + housePriceP + ".");
} else {
    console.log("Peter, this is ridiculous! This house is overpriced! Average price for this type of houses is: " + housePriceP + ".");
}

//Calculation for Julia
const wideOfHouseJ = 5;
const deepOfHouseJ = 11;
const highOfHouseJ = 8;
const gardenSizeInM2J = 70;
const priceOfHouseJ = 1000000;
const volumeInMetersJ = wideOfHouseJ * deepOfHouseJ * highOfHouseJ;

const housePriceJ = volumeInMetersJ * 2.5 * 1000 + gardenSizeInM2J * 300; /* Calculates an average price for this type of houses */

if (housePriceJ >= priceOfHouseJ) {
    console.log("Julia, you found a good deal! " + "Average price for this type of houses is: " + housePriceJ + ".");
} else {
    console.log("Julia, this is ridiculous! This house is overpriced! Average price for this type of houses is: " + housePriceJ + ".");
}


//EZ NAMEY (Startup name generator)
const firstWords = ["Easy","Awesome","Petite","Undefeated","Supreme","Private","Public","Crazy","Precious","Dreamy"]; /* Declares array consisted with first words */
const secondWords = ["Corporation","Brand","Studio","Group","Enterprise","Desk","Bureau","Department","Branch","Office"]; /* Declares array consisted with second words */
const randomNumber = Math.floor(Math.random() * 10); /* Generates random numbers */

const startupName = firstWords[(randomNumber)] + " " + secondWords[(randomNumber)]; /* Creates a random startup name */
const startupNameLength = startupName.length; /* Calculates a number of characters */

console.log("The startup: " + "\"" + startupName + "\"" + " contains " + startupNameLength + " characters.")


