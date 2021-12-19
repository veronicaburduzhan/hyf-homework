//CANDY HELPER
const boughtCandyPrices = [];
//candyType: sweet - 0.5, chocolate - 0.7, toffee - 1.1, chewing-gum - 0.03
function addCandy(candyType, weight) {
  let candyPrice;
  //below are conditions for calculating prices for each types of candies depending on price per gram
  if (candyType === "sweet") {
    candyPrice = weight * 0.5;
    boughtCandyPrices.push(candyPrice);
  }
  if (candyType === "chocolate") {
    candyPrice = weight * 0.7;
    boughtCandyPrices.push(candyPrice);
  }
  if (candyType === "toffee") {
    candyPrice = weight * 1.1;
    boughtCandyPrices.push(candyPrice);
  }
  if (candyType === "chewing-gum") {
    candyPrice = weight * 0.03;
    boughtCandyPrices.push(candyPrice);
  }
}

let candyTotalPrice = 0;
function calculateTotalPrice() {
  //this function returns total price of all bought candies
  for (i = 0; i < boughtCandyPrices.length; i++) {
    candyTotalPrice += boughtCandyPrices[i];
  }
  return candyTotalPrice;
}

let amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
  //logs out whether you can or cannot buy selected candies depending on amount we get from Math.random
  if (amountToSpend > candyTotalPrice) {
    console.log("You can buy more, so please do!");
  } else console.log("Enough candy for you!");
}

//example
addCandy("sweet", 30);
addCandy("toffee", 5);
addCandy("chocolate", 4);
console.log(boughtCandyPrices);
console.log("Total amount for your candies is " + calculateTotalPrice());
console.log(canBuyMoreCandy());
