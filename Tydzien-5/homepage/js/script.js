{
  function welcome() {
    console.log("Witaj Neo w Matriksie ;-)");
  }
  welcome();
  const block = document.body;
  block.classList.add("mySite");
  const btnFont = document.querySelector(".introduction__buttons--font");
  const btnBackground = document.querySelector(".introduction__buttons--background");
  const btnPhoto = document.querySelector(".introduction__buttons--changePhoto");
  const about = document.querySelector(".introduction");
  const photo = document.querySelector(".introduction__photo");
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
