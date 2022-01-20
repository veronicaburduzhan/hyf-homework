function formatCreditCardNumber(num) {
  let formattedNum;
  if (typeof num !== "number") {
    return "This is not a number. Please, enter valid card number.";
  } else {
    formattedNum = num.toString().replace(/\b(?:\d[ -]*?){13,16}\b/g, " ");
  }
  const formattedCardNum = new Object();
  formattedCardNum.original = num;
  formattedCardNum.formatted = formattedNum;
  return formattedCardNum;
}

console.log(formatCreditCardNumber(123456789));

validCardFormat = {
  dankort: /^(5019)\d+$/,
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard:
    /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
  americanexpress: /^3[47][0-9]{13}$/,
};

function getCardInfo(cardNum) {
  let cardNumber = cardNum.split(" ").join("");
  for (let cardType in validCardFormat) {
    if (validCardFormat[cardType].test(cardNumber)) {
      return cardType;
    }
  }
  return "Doesn't match any valid format!";
}

console.log(getCardInfo(4781321334789876));