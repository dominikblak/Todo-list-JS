{
  function welcome() {
    console.log("Witaj Neo w Matriksie ;-)");
  }
  welcome();
  const block = document.body;
  block.classList.add("mySite");
  const btnFont = document.querySelector(".introduction__buttons--font");
  const btnBackground = document.querySelector(".introduction__buttons--background");
  const btnPhoto = document.querySelector(".introduction__buttons--removePhoto");
  const about = document.querySelector(".introduction");
  const photo = document.querySelector(".introduction__photo");
  const jsPhoto = document.querySelector(".introduction__photo--js");
  const myPhoto = document.querySelector(".introduction__photo--my");

  const changeColorFont = () => {
    document.body.classList.toggle("colorFont");
  };
  const changeBackground = () => {
    document.body.classList.toggle("whiteTheame");
  };

  const changePhoto = () => {
    jsPhoto.classList.toggle("hidden");
    myPhoto.classList.toggle("hidden");
    if (myPhoto.classList.contains("hidden")) {
      btnPhoto.innerHTML = "Pokaż mnie";
    } else {
      btnPhoto.innerHTML = "Pokaż logo";
    }

    /*    if (photo.style.display === "none") {
      photo.style.display = "block";
      btnPhoto.innerHTML = "Ukryj zdjęcie";
    } else {
      photo.style.display = "none";
      btnPhoto.innerHTML = "Pokaż zdjęcie";
    } */
  };
  btnFont.addEventListener("click", changeColorFont);
  btnBackground.addEventListener("click", changeBackground);
  btnPhoto.addEventListener("click", changePhoto);
}
