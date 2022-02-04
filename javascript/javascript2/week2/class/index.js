const mentors = [
  {
    name: "Abed Sujan",
    subjects: ["JS", "HTML", "CSS", "NODEJS"],
    yearOfExperience: 4,
  },
  {
    name: "Ahmed Magdy",
    subjects: ["JS", "Database", "CSS"],
    yearOfExperience: 1,
  },
  {
    name: "Alicia Gonzales",
    subjects: ["DB", "HTML", "NODEJS"],
    yearOfExperience: 8,
  },
  {
    name: "allan Thraen",
    subjects: ["REACT", "html", "CSS"],
    yearOfExperience: 3,
  },
  {
    name: "Anders Ravn",
    subjects: ["JS", "HTML", "NODEJS"],
    yearOfExperience: 2,
  },
  {
    name: "Daniel Fernandes",
    subjects: ["Database", "HTML", "CSS"],
    yearOfExperience: 9,
  },
];

const expiriencedMentors = mentors.filter(function (mentor) {
  return mentor.yearOfExperience > 3;
});

console.log(expiriencedMentors);
    
/*const lowerWordHTML = mentors.map(function (mentor) {
    mentor.subjects.map(function (subject) {
        return subject.toLowerCase();
    })
});*/
     
const mentorLowerCase = mentors.map(function (mentor) {
  const mentorSubject = mentor.subjects.map(function (subject) {
    return subject.toLowerCase();
  });
  mentor.subjects = mentorSubject;
  return mentor;
});

const htmlExpert = mentorLowerCase.filter(function (mentor) {
    return mentor.subjects.includes("html");
});

const knowsHTML = mentorLowerCase.map(function (mentor) {
    if (mentor.subjects.includes("html")) {
        
        mentor.knowsHTML = true;
    } else {
        mentor.knowsHTML = false;
    }
    return mentor;
})

console.log(htmlExpert);
console.log(knowsHTML);


const dataArray = [1,2,3,4,5,6,7,8];
            // 1. Filter out the odd elements
            // 2. Square the new objects (x * x)
            // DO THIS WITH ARROW FUNCTIONS
const newNumbers = dataArray
  .filter((number) => number % 2 !== 0)
  .map((number) => number * number);

console.log(newNumbers);


/* NOTES ON ARRAY METHODS, ARROW FUNCTIONS */

// ARROW FUNCTIONS 

// We're used to expressing functions like this: 
//                 argument
//                   |
function myFunction(arg) { 
    // 
    //
    //   return value
    //       |
    return arg;
}

// But we can actually make a shortcut by using the arrow function syntax. It looks like this:
//               argument
//                 |  return value
//                 |       |
const myFunction = arg => arg;

// If we want multiple arguments, we need to wrap them in parentheses
const functionOfSeveralArgs = (arg1, arg2, arg3) => arg1;

// If the function can be expressed in a single line, we don't need to add a return statement! So
const testEquals = (a, b) => a === b; // returns true if a equals b
testEquals(2,2) // true

// What if we need to do something complicated? No problem! We add curly braces, BUT we need to remember to provide a return statement
const complicatedFunction = (a, b) => {
    c = a*2 + b*3;
    d = c/4;
    return d;
}

// Arrow functions are particularly useful shortcuts when we're dealing with anonymous functions - for instance this event listener
const button = document.createElement("button");
button.onclick = (event) => console.log('clicked!');

/* ARRAY METHODS */ 
// Any time we have an array of data, we have built-in methods to iterate over the array and solve problems relating to each element

const myArray = [1,2,3,4,5,6];

// FOREACH
myArray.forEach(function(item) {
    console.log(item);
})

// forEach just runs a function on each element in the array. It has no return value, but you can modify everything in memory as you want
// As an arrow function, it would look like:
myArray.forEach(item => console.log(item));

// Let's say that we want to modify the DOM with a forEach
myArray.forEach(item => {
    const body = document.querySelector('body');
    const paragraph = document.createElement('p');
    paragraph.innerText = `Item number ${item}`;
    body.appendChild(paragraph);
});

// FILTER 
// We often need to select only a subset of an array to work with - luckily filter provides a way to directly get such a subset! 

//                        function that returns a BOOLEAN (true/false) given the input
//                                             |
//                                  ___________|_____________
//                                 |                         |
const evenNumbers = myArray.filter(number => number % 2 === 0);
//                                           |_______________|
//                                                   |
//                            condition that is true for items we want to keep

// If we wanted to write this in an ordinary function, we could do this:
myArray.filter(function(number) {
    const isNumberEven = number % 2 === 0;
    return isNumberEven;
});

// The function we pass to .filter MUST return true or false given an element. If it doesn't, .filter will just return the original array
const unfilteredArray = myArray.filter(number => {
    console.log(number); // Doesn't return anything
});

// MAP 
// What if we DO want the inner function to return something? For instance, we're often faced with needing to change the contents of an array somehow
// This is where .map comes in - it returns an array of items specified in the return statement of the function we pass it! 
const doubledArray1 = myArray.map(number => number*2);
// If we're doing things that need multiple lines, we MUST return something - otherwise .map will return an array of [undefined, undefined, ..., undefined]
const doubledArray2 = myArray.map(number => {
    return number * 2;
});

// ANYTHING we can do in a regular function we can do in .map(). For instance, consider an array of objects
const products = [{ title: 'product 1', price: 4.57 }, { title: 'product 2', price: 10.22 }, { title: 'product 3', price: 2.57 }];
// What if I wanted an array of just the prices? 
const prices1 = products.map(product => product.price); 
// this is the same thing as writing:
const prices2 = [];
for(let i = 0; i < products.length; i++) {
    let currentProduct = products[i];
    prices2.push(currentProduct.price);
}

// Sometimes we want to return a modified version of the original array, like adding a key
// We can do this without mutating the original array using object cloning:
const taggedProducts = products.map(product => {
	const newProduct = {...product};
	newProduct.tag = newProduct.price >= 3.5 ? "Expensive" : "Cheap";
	return newProduct;
});
// We can write the same thing in a shorter way like this:
const taggedProducts = products.map(product => ({...product, tag: product.price >= 3.5 ? "Expensive": "Cheap"}));
// Note the parenthesis enclosing the object we're returning! The spread operator won't work without it in this case


// CHAINING 

// EVERY time we have an array, we can call an array method (map, filter, forEach, reduce, some, includes, etc.)
// This means that methods that return arrays (map, filter) always can be combined with other array methods!
const filteredAndDoubledNumbers = myArray
        .filter(number => number % 2 === 0) // only keep even numbers
        .map(number => number*2); // double whatever numbers are left

// What other convenient array methods do we have? 
// INCLUDES
// check if an array includes some value
const myValues = ["Hello", "how", "is", "it", "going"];
myValues.includes("how") // true
myValues.includes("hello") // FALSE - "hello" !== "Hello" because of capitalization - let's combine what we know
myValues.map(word => word.toLowerCase()).includes("hello") // True! 

// Check if some condition is true for at least one member of the array
myValues.some(word => word === "Hello") // True - AT LEAST one word equals "Hello"

// Sort an array by some notion of comparison - e.g. let's sort the myValues array by string length with the shortest first:
myValues.sort((string1, string2) => string1.length - string2.length);

// There's lots more array functions, but the big one is ... 

// REDUCE

// .reduce() is a shortcut to solve the problem we often face of having to loop over an array and keep track of something. 
// Maybe we're trying to count things, maybe we're building an object - reduce allows us to do this in one pass, with the cost of a little mental complexity

// Let's sum the prices of the products from before
const combinedPrice = products.reduce((previouslyReturnedValue, nextItemInArray) => previouslyReturnedValue + nextItemInArray.price, 0);
//                                    |____________________________________________________________________________________________| |
//                                                                                 |                                                 |
//                                                               function that specifies how the initial/previous value is updated   |
//                                                                                                                                   |
//                                                                                                                             initial value 
//                                                                                                     this will be `previouslyReturnedValue` on the first iteration!


// We can do pretty much whatever we want with .reduce, we are not limited to computing a sum 
// Let's take the mentors array:
const mentors = [
    { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4},
    { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1},
    { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8},
    { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3},
    { "name": "Anders Ravn", "subjects": ['JS', 'html', 'NODEJS'], yearOfExperience: 2},
    { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9}
    ];
// Let's create an object that tracks how many people know each subject
// We start with an empty object as objectWithCounts, and as we loop over each mentor, we update its keys and values!
const counts = mentors.reduce((objectWithCounts, mentor) => {
    // We want to fill in the initial object with a count whenever a mentor knows a particular skill:
    mentor.subjects.forEach(subject => {
        // If the key already exists in the object, add one to the value already there
        if (subject in objectWithCounts) {
            objectWithCounts[subject] = objectWithCounts[subject] + 1;
        } else {
            // Else create the key with value 1
            objectWithCounts[subject] = 1;
        }
    })
    // Remember to return! The next iteration needs this object
    return objectWithCounts;
}, {})
// counts = { JS: 3, HTML: 4, CSS: 4, NODEJS: 3, Database: 2, DB: 1, REACT: 1, html: 1 }

// We could also write this very concisely by using the ternary operator 
const counts2 = mentors.reduce((objectWithCounts, mentor) => {
    mentor.subjects.forEach(subject => objectWithCounts[subject] = !objectWithCounts[subject] ? 1 : objectWithCounts[subject] + 1);
    return objectWithCounts
}, {});
