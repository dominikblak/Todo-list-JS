{
  function welcome() {
    console.log("Witaj Neo w Matriksie ;-)");
  }
  const buttonPhoto = document.querySelector(".js-buttonChangePhoto");
  const jsLogo = document.querySelector(".js-jsLogo");
  const myPhoto = document.querySelector(".js-myPhoto");
  const container = document.querySelector(".js-container");
  const body = document.querySelector(".js-body");

  const changeColorFont = () => {
    container.classList.toggle("container--changeFontColor");
  };
  const changeBackground = () => {
    body.classList.toggle("body--backgroundWhite");
    container.classList.toggle("container--fontBlack");
  };

  const changePhoto = () => {
    jsLogo.classList.toggle("hidden");
    myPhoto.classList.toggle("hidden");
    if (myPhoto.classList.contains("hidden")) {
      buttonPhoto.innerHTML = "Pokaż mnie";
    } else {
      buttonPhoto.innerHTML = "Pokaż logo";
    }
  };

  const init = () => {
    welcome();
    const buttonFont = document.querySelector(".js-buttonFont");
    const buttonBackground = document.querySelector(".js-buttonBackground");
    buttonFont.addEventListener("click", changeColorFont);
    buttonBackground.addEventListener("click", changeBackground);
    buttonPhoto.addEventListener("click", changePhoto);
  };
  init();
}
