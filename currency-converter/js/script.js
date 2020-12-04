let amount = document.querySelector(".counter__files");
let formElement = document.querySelector(".counter__form");
let choice = document.querySelector(".counter__files--margin");
let currencyValue = document.querySelector(".counter__value");
let result;

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let amountValue = amount.value;
  let choiceValue = choice.value;

  if (choiceValue === "euro") {
    result = amountValue * 4.47;
  } else if (choiceValue === "usd") {
    result = amountValue * 3.68;
  } else {
    result = amountValue * 2.11;
  }

  currencyValue.innerText = `${result.toFixed(2)} zł`;
});
