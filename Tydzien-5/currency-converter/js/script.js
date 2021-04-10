{
  const calculateResult = (amountValue, choiceValue) => {
    const EuroRate = 4.47;
    const UsdRate = 3.68;
    const UgxRate = 2.11;

    switch (choiceValue) {
      case "EUR":
        return amountValue * EuroRate;
      case "USD":
        return amountValue * UsdRate;
      case "ISA":
        return amountValue * UgxRate;
    }
  };
  const upadteResultText = (amountValue, result, choiceValue) => {
    const currencyValElement = document.querySelector(".js-value");
    currencyValElement.innerHTML = `${amountValue.toFixed(2)} PLN = <strong>${result.toFixed(
      2
    )} ${choiceValue}</strong>`;
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
