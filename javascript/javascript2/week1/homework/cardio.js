//FINDS THE SHORTEST WORD
function findShortestWord(array) {
  shortestWord = array.reduce(function (prev, next) {
    if (prev.length < next.length) {
      return prev;
    } else if (prev.length === next.length) {
      return prev;
    } else {
      return next;
    }
  });
  console.log(shortestWord);
}
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
findShortestWord(danishWords); // returns 'ø'

//FIND AND COUNT THE DANISH LETTERS
/* function findAndCountDanishLetters(arr) {
  const arrSplit = arr.split("");
  const danishletterAE = arrSplit.filter((i) => i === "æ").length;
  const danishletterOE = arrSplit.filter((i) => i === "ø").length;
  const danishletterAA = arrSplit.filter((i) => i === "å").length;
  let totalLetters = danishletterAE + danishletterOE + danishletterAA;

  const danishLetters = new Object();
  danishLetters.total = totalLetters;
  if (danishletterAE > 0) {
    danishLetters["æ"] = danishletterAE;
  }
  if (danishletterOE > 0) {
    danishLetters["ø"] = danishletterOE;
  }
  if (danishletterAA > 0) {
    danishLetters["å"] = danishletterAA;
  }
  return danishLetters;
} */

function findAndCountDanishLetters(inputString) {
  const characterArray = inputString.split("");
  const danishCharacterArray = ["æ", "ø", "å"];
  const danishLetters = {};
  let total = 0;
  for (let i = 0; i < characterArray.length; i++) {
    const currentChar = characterArray[i];
    if (danishCharacterArray.includes(currentChar)) {
      total += 1;
      // Add the character to danishLetters or count it up if it's there
      if (currentChar in danishLetters) {
        danishLetters[currentChar] += 1;
      } else {
        danishLetters[currentChar] = 1;
      }
    }
  }
  danishLetters["total"] = total;
  return danishLetters;
}
const danishString = "Jeg har en blå bil";
console.log(findAndCountDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(findAndCountDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
