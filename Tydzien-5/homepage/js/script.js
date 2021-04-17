{
  function welcome() {
    console.log("Witaj Neo w Matriksie ;-)");
  }
  welcome();
  const btnFont = document.querySelector(".js-btnFont");
  const btnBackground = document.querySelector(".js-btnBackground");
  const btnPhoto = document.querySelector(".js-btnChangePhoto");
  const jsLogo = document.querySelector(".js-jsLogo");
  const myPhoto = document.querySelector(".js-myPhoto");

  const changeColorFont = () => {
    document.body.classList.toggle("colorFont");
  };
  const changeBackground = () => {
    document.body.classList.toggle("whiteTheame");
  };

  const changePhoto = () => {
    jsLogo.classList.toggle("hidden");
    myPhoto.classList.toggle("hidden");
    if (myPhoto.classList.contains("hidden")) {
      btnPhoto.innerHTML = "Pokaż mnie";
    } else {
      btnPhoto.innerHTML = "Pokaż logo";
    }
  };
  btnFont.addEventListener("click", changeColorFont);
  btnBackground.addEventListener("click", changeBackground);
  btnPhoto.addEventListener("click", changePhoto);
}
