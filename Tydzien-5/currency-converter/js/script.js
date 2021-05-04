{
  const calculateResult = (amountValue, choiceValue) => {
    const EuroRate = 4.47;
    const UsdRate = 3.68;
    const GbpRate = 5.26;
    const IsaRate = 2.11;

    switch (choiceValue) {
      case "EUR":
        return amountValue / EuroRate;
      case "USD":
        return amountValue / UsdRate;
      case "GBP":
        return amountValue / GbpRate;
      case "ISA":
        return amountValue / IsaRate;
    }
  };
  const upadteResultText = (amountValue, result, choiceValue) => {
    const currencyValElement = document.querySelector(".js-value");
    currencyValElement.innerHTML = `${amountValue.toFixed(2)} PLN = ${result.toFixed(2)} ${choiceValue}`;
  };
  const init = () => {
    const formElement = document.querySelector(".js-form");
    const onFormSubmit = (e) => {
      e.preventDefault();
      const amountElement = document.querySelector(".js-input");
      const choiceElement = document.querySelector(".js-container");
      const amountValue = +amountElement.value;
      const choiceValue = choiceElement.value;
      let result = calculateResult(amountValue, choiceValue);

      upadteResultText(amountValue, result, choiceValue);
    };
    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}
