//FREECODECAMP
console.log("My FreeCodeCamp username is @veronika_burduzhan");

//FLIGHT BOOKING FULLNAME FUNCTION
function getFullname(firstname, surname, useFormalName) {
  let fullname = firstname + " " + surname;
  if (firstname === " " || surname === " ") {
    return "Please, fill out your name!";
  }
  if (useFormalName === true) {
    return "Lord" + " " + fullname;
  } else return fullname;
}

const fullname1 = getFullname("John", "Doe", true);
const fullname2 = getFullname("Jane", "Doe", false);
console.log(fullname1);
console.log(fullname2);

/* To solve problem with addressing to women I would add gender radio buttons (ex. <male>, <female>, <don't want to tell>), 
than add one more parameter - gender - to the function, and update conditions so when user choose <female> it return "Lady". */
