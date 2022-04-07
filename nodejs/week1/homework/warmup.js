console.log("inside warmup file");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return (this.radius * 2).toFixed(2);
  }
  getCircumference() {
    return (2 * 3.14 * this.radius).toFixed(2);
  }
  getArea() {
    return (3.14 * this.radius * this.radius).toFixed(2);
  }
}

const circleOne = new Circle(5);
console.log(
  `The radius is ${
    circleOne.radius
  }, diameter: ${circleOne.getDiameter()}, area: ${circleOne.getArea()}, circumference: ${circleOne.getCircumference()}`
);

const circleTwo = new Circle(7);
console.log(
  `The radius is ${
    circleTwo.radius
  }, diameter: ${circleTwo.getDiameter()}, area: ${circleTwo.getArea()}, circumference: ${circleTwo.getCircumference()}`
);

const circleThree = new Circle(3.5);
console.log(
  `The radius is ${
    circleThree.radius
  }, diameter: ${circleThree.getDiameter()}, area: ${circleThree.getArea()}, circumference: ${circleThree.getCircumference()}`
);
