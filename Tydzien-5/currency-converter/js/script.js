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
  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const amountElement = document.querySelector(".js-files");
      const choiceElement = document.querySelector(".js-counter");
      const currencyValElement = document.querySelector(".js-value");
      const amountValue = +amountElement.value;
      const choiceValue = choiceElement.value;
      let result = calculateResult(amountValue, choiceValue);

      currencyValElement.innerText = `${result.toFixed(2)} zł`;
    });
  };
  init();
}
