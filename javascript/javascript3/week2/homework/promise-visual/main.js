/* Target values:
Red circle target: x: 20px, y: 300px;
Blue circle target: x: 400px, y: 300px;
Green circle target: x: 400px, y: 20px;
*/

//Get html-elements and assign variables to them
const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const boxes = [redBox, blueBox, greenBox];

//Get initial x, y coordinates and find new target values of x, y coordinates
const redBoxX = 20 - parseInt(redBox.style.left);
const redBoxY = 300 - parseInt(redBox.style.top);
const blueBoxX = 400 - parseInt(blueBox.style.left);
const blueBoxY = 300 - parseInt(blueBox.style.top);
const greenBoxX = 400 - parseInt(greenBox.style.left);
const greenBoxY = 20 - parseInt(greenBox.style.top);

//create function that moves each circle one by one 
async function translateOneByOne() {
    await new Promise((resolve, reject) => {
        try {
          moveElement(redBox, { x: redBoxX, y: redBoxY }).then(() => {
            console.log("Red circle has been moved first");
            moveElement(blueBox, { x: blueBoxX, y: blueBoxY }).then(() => {
              console.log("Blue circle has been moved second");
              moveElement(greenBox, { x: greenBoxX, y: greenBoxY }).then(() => {
                console.log("Green circle has been moved third");
              });
            });
          });
        } catch (error) {
          console.log(error);
        }
    })
}
translateOneByOne();

//create function that moves each circle all at once
function translateAllAtOnce() {
  let redBoxPromise = new Promise((resolve, reject) => {
    moveElement(redBox, { x: redBoxX, y: redBoxY }).then(() => {
      console.log("Red circle has been moved along with blue and green")
    });
  });
  let blueBoxPromise = new Promise((resolve, reject) => {
    moveElement(blueBox, { x: blueBoxX, y: blueBoxY }).then(() => {
      console.log("Blue circle has been moved along with red and green")
    });
  });
  let greenBoxPromise = new Promise((resolve, reject) => {
    moveElement(greenBox, { x: greenBoxX, y: greenBoxY }).then(() => {
      console.log("Green circle has been moved along with blue and red")
    });
  });
  Promise.all([redBoxPromise, blueBoxPromise, greenBoxPromise])
    .then(() => {
      console.log("Done");
    })
    .catch((error) => {
      console.error(error.message);
    });
}
translateAllAtOnce();

/* THIS IS ALSO WORK BUT I DON'T KNOW IS IT RIGHT
async function translateAllAtOnce() {
    await new Promise((resolve, reject) => {
        try {
          moveElement(redBox, { x: redBoxX, y: redBoxY }).then(() => {
            console.log("Red circle has been moved along with blue and green");
          });
          moveElement(blueBox, { x: blueBoxX, y: blueBoxY }).then(() => {
            console.log("Blue circle has been moved along with red and green");
          });
          moveElement(greenBox, { x: greenBoxX, y: greenBoxY }).then(() => {
            console.log("Green circle has been moved along with blue and red");
          });
        } catch (error) {
          console.log(error);
        }
    })
}
translateAllAtOnce();*/