let amountElement = document.querySelector(".js-files");
let formElement = document.querySelector(".js-form");
let choiceElement = document.querySelector(".js-counter");
let currencyValElement = document.querySelector(".js-value");
let result;

let EuroRate = 4.47;
let UsdRate = 3.68;
let UgxRate = 2.11;

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let amountValue = +amountElement.value;
  let choiceValue = choiceElement.value;

  switch (choiceValue) {
    case "eur":
      result = amountValue * EuroRate;
      break;
    case "usd":
      result = amountValue * UsdRate;
      break;
    case "ugx":
      result = amountValue * UgxRate;
      break;
  }

  currencyValElement.innerText = `${result.toFixed(2)} zł`;
});
