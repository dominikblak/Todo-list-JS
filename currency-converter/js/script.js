let amountElement = document.querySelector(".js-files");
let formElement = document.querySelector(".js-form");
let choiceElement = document.querySelector(".js-counter");
let currencyValElement = document.querySelector(".js-value");
let result;

let EuroRate = 4.47;
let UsdRare = 3.68;
let EscRate = 2.11;

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let amountValue = amountElement.value;
  let choiceValue = choiceElement.value;

  if (choiceValue === "euro") {
    result = amountValue * 4.47;
  } else if (choiceValue === "usd") {
    result = amountValue * 3.68;
  } else {
    result = amountValue * 2.11;
  }

  currencyValElement.innerText = `${result.toFixed(2)} zł`;
});
