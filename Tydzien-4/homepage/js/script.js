console.log("Witaj Neo w Matriksie !");
const buttonFont = document.querySelector(".js-buttonFont");
const buttonBackground = document.querySelector(".js-buttonBackground");
const buttonPhoto = document.querySelector(".js-buttonRemovePhoto");
const photo = document.querySelector(".introduction__photo");
const container = document.querySelector(".js-container");
const body = document.querySelector(".js-body");

const changeColorFont = () => {
  container.classList.toggle("colorFont");
};
const changeBackground = () => {
  body.classList.toggle("body--whiteBackground");
  container.classList.toggle("container--blackFont");
};

const addPhoto = () => {
  if (photo.style.display === "none") {
    photo.style.display = "block";
    buttonPhoto.innerHTML = "Ukryj logo";
  } else {
    photo.style.display = "none";
    buttonPhoto.innerHTML = "Pokaż logo";
  }
};
buttonFont.addEventListener("click", changeColorFont);
buttonBackground.addEventListener("click", changeBackground);
buttonPhoto.addEventListener("click", addPhoto);
