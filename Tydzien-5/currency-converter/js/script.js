{
  const calculateResult = (amountValue, choiceValue) => {
    const EuroRate = 4.47;
    const UsdRate = 3.68;
    const UgxRate = 2.11;

    switch (choiceValue) {
      case "eur":
        return amountValue * EuroRate;
      case "usd":
        return amountValue * UsdRate;
      case "ugx":
        return amountValue * UgxRate;
    }
  };
  const upadteResultText = (amountValue, result, choiceValue) => {
    const currencyValElement = document.querySelector(".js-value");
    currencyValElement.innerText = `${amountValue.toFixed(2)} PLN = ${result.toFixed(2)} ${choiceValue}`;
  };
  const init = () => {
    const formElement = document.querySelector(".js-form");
    const onFormSubmit = (e) => {
      e.preventDefault();
      const amountElement = document.querySelector(".js-files");
      const choiceElement = document.querySelector(".js-counter");
      const amountValue = +amountElement.value;
      const choiceValue = choiceElement.value;
      let result = calculateResult(amountValue, choiceValue);

      upadteResultText(amountValue, result, choiceValue);
    };
    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}
