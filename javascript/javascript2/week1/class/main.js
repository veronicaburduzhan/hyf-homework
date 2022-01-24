/* 
    This is a Javascript file
    It is best to load it in a <script> tag at the END of the <body>! 

    If load the following javascript in the <head>, the body won't exist yet and the program will crash: 

    <head>
        <title>My test document</title>
        <script>
            const newElement = document.createElement("p");
            newElement.innerText = "Can I be added to the DOM?"

            const body = document.querySelector("body");

            body.appendChild(newElement) // CRASH! Body doesn't exist yet 
        </script>
    </head>
*/

/* READING THE DOM */

const tagCollection = document.getElementsByTagName("p"); // Gets all <p> tags as a collection
const firstParagraph = document.querySelector("p"); // Gets the first <p> tag in the document
const paragraphCollection = document.querySelectorAll("p"); // Gets all <p> tags as a collection
const classCollection = document.getElementsByClassName("my-class"); // Gets all tags with a specific class (as a collection)
const specificIdNode = document.getElementById("test"); // Gets a single node with id="test"
const anotherSpecificIdNode = document.querySelector("#test"); // Gets a single node with id="test" -- we can use querySelector with CSS selector syntax!

// How can we iterate over all the child nodes of a node?
const nodes = document.body.children;
for (i = 0; i < nodes.length; i++) {
  // Do something with each child of the body
  const child = nodes[i];
  console.log(child.innerText);
}

/* DOM MANIPULATION */

// Creating elements and giving them data

const newNode = document.createElement("p"); // <-- This is a node! It has data bout its style, or its innerText, etc.

// Adding some text to the paragraph
newNode.innerText = "Hello, here's some text";
// Adding some style
newNode.style.color = "red";
// Adding a class
newNode.classList.add("hello"); // the same as: <p class="hello">Hello, here's some text</p>
// Removing a class
newNode.classList.remove("hello"); // the same as: <p>Hello, here's some text</p>

// Modifying the DOM by adding nodes
// Let's add the node to the body
const body = document.querySelector("body"); // also: document.body;
body.appendChild(newNode); // Document now looks like this: <body><p>Hello, here's some text</p></body>

// We can also add entire snippets of HTML inside a node
newNode.innerHTML = `
    <h3>Here's one tag</h3>
    <p>Here's another</p>
    <p>It all works so long as it's valid HTML!</p>
`;

/* Exercise: How can we use data to modify the DOM? Let's take the podcast example: 
1. We'll create a <ul> tag
2. We'll loop over an array of podcast objects
3. For every object, we will create a <li> tag with some content that depends on the data */
const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

// Create our unordered list
const list = document.createElement("ul");
// Loop over the podcasts and add them to the list
for (let i = 0; i < podcasts.length; i++) {
  const podcast = podcasts[i]; // This is an object with a "name" field and MAYBE an "imageUrl" field
  const listItem = document.createElement("li");
  // Create the podcast title
  const headline = document.createElement("h1");
  headline.innerText = podcast.name;
  listItem.appendChild(headline);

  // IF we have an imageUrl key, we'll add an img tag
  if ("imageUrl" in podcast) {
    const image = document.createElement("img");
    image.src = podcast.imageUrl; // Could also do podcast["imageUrl"];
    listItem.appendChild(image);
  }

  // Add the list item to the list
  list.appendChild(listItem);
}

// Add the list to the body
document.body.appendChild(list);

/* EVENT LISTENERS!!!

Every user interaction with the browser window is tracked and made available through Events
You can get the cursor position, the coordinates of where the user clicked, what the user clicked, what data the user input into a field, and much, much more

To get access to this, we need to write special kinds of functions called EVENT LISTENERS - they're functions that take a single argument, an event, and we add them to nodes:

                            Event name         event listener
                               |                  |
                               |                  |
1. myNode.addEventListener("click",     function(event) { ... }); 

        event method       
             |          event listener
             |            |
2. myNode.onclick = function(event) {... };

// You can also add event listeners as named functions:

function myFunction(event) { 
    ...
};

myNode.addEventListener("click", myFunction)
myNode.onclick = myFunction

// Just remember to pass the function itself without calling it - the remember not to add the parentheses! e.g. NOT myFunction() 
// This just calls the function ONCE and passes the return value (e.g. nothing) to the addEventListener method as an argument
*/

// Let's give the user the ability to choose the state of a variable and keep track of it
let myStateVariable = "option1";

const select = document.createElement("select");
const opt1 = document.createElement("option");
opt1.value = "option1";
opt1.innerText = "First option";

const opt2 = document.createElement("option");
opt2.value = "option2";
opt2.innerText = "Second option";

select.appendChild(opt1);
select.appendChild(opt2);

// Add our event listener that fires when an option is selected
select.onchange = function (event) {
  // Update our state variable with the event value
  myStateVariable = event.target.value;
  console.log(myStateVariable);
};

// Add the select tag to the body
document.body.appendChild(select);

// Try toggling the dropdown - you'll see the console respond to your choice!

/* CLEARING EVENT LISTENERS */
// It's a good idea sometimes to reset the event listeners so you know what you're working with. It's as easy as:
// select.onchange = null;
// Now nothing will happen when toggled, and you'll have to add it again somewhere - maybe in response to other user input?
