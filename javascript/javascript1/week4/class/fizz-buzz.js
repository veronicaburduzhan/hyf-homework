/*function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzbuzz();*/

function fizzbuzz(x, y) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(x);
  }
  if (y % 3 == 0 && y % 5 == 0) {
    console.log("FizzBuzz");
  } else if (y % 3 == 0) {
    console.log("Fizz");
  } else if (y % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(y);
  }
}

fizzbuzz(4, 12);