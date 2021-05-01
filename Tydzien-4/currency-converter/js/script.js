let amountElement = document.querySelector(".js-input");
let formElement = document.querySelector(".js-form");
let choiceElement = document.querySelector(".js-container");
let currencyValElement = document.querySelector(".js-value");
let result;

let EuroRate = 4.47;
let UsdRate = 3.68;
let GbpRate = 5.26;
let UgxRate = 2.11;

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let amountValue = +amountElement.value;
  let choiceValue = choiceElement.value;

  switch (choiceValue) {
    case "EUR":
      result = amountValue / EuroRate;
      break;
    case "USD":
      result = amountValue / UsdRate;
      break;
    case "GBP":
      result = amountValue / GbpRate;
      break;
    case "ISA":
      result = amountValue / UgxRate;
      break;
  }

  currencyValElement.innerText = `${result.toFixed(2)} ${choiceValue}`;
});
