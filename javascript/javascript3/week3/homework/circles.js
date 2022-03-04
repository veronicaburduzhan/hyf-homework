// General variables

// 1. Paint a circle to a canvas element

const c = document.getElementById("myCanvas");
c.width = window.innerWidth; //this two lines resize canvas to fit the window
c.height = window.innerHeight;
const circle = c.getContext("2d");
//test
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "pink";
ctx.fill();

// 2. Circle class
class Circle {
  constructor(x, y, r, sAngle, eAngle, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sAngle = sAngle;
    this.eAngle = eAngle;
    this.color = color;
  }
  draw() {
    circle.beginPath();
    circle.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
    circle.fillStyle = this.color;
    circle.fill();
  }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();
const c2 = new Circle(100, 300, 35, 0, 2 * Math.PI, "#000000");
c2.draw();

// 3. Random values for circles
function randomX() {
  return Math.floor(Math.random() * window.innerWidth);
}

function randomY() {
  return Math.floor(Math.random() * window.innerHeight);
}

function randomR() {
  return Math.floor(Math.random() * 150);
}

function randomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

const circlesInterval = setInterval(() => {
  const c3 = new Circle(
    randomX(),
    randomY(),
    randomR(),
    0,
    2 * Math.PI,
    randomColor()
  );
  c3.draw();
}, 100);

function stopInterval(myInterval, timeout) {
  setTimeout(() => {
    clearInterval(myInterval);
  }, timeout * 1000);
}

stopInterval(circlesInterval, 4); //to stop interval after 4s

// Appear by cursor position (didn't know how to make it appears around cursor)
c.addEventListener("mousemove", (e) => {
  const x = e.offsetX + 50;
  const y = e.offsetY + 50;
  const c4 = new Circle(x, y, 30, 0, 2 * Math.PI, randomColor());
  c4.draw();
});
