{
  const calculateResult = (amountValue, choiceValue) => {
    const euroRate = 4.47;
    const usdRate = 3.68;
    const gbpRate = 5.26;
    const isaRate = 2.11;

    switch (choiceValue) {
      case "EUR":
        return amountValue / euroRate;
      case "USD":
        return amountValue / usdRate;
      case "GBP":
        return amountValue / gbpRate;
      case "ISA":
        return amountValue / isaRate;
    }
  };
  const updateResultText = (amountValue, result, choiceValue) => {
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
      const result = calculateResult(amountValue, choiceValue);

      updateResultText(amountValue, result, choiceValue);
    };
    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}
