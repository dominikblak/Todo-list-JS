console.log("Witaj Neo w Matriksie !");
const block = document.body;
block.classList.add("mySite");
const btnFont = document.querySelector(".font");
const btnBackground = document.querySelector(".background");
const btnPhoto = document.querySelector(".removePhoto");
const about = document.querySelector(".aboutMe");
const photo = document.querySelector(".photo");

const changeColorFont = () => {
  about.classList.toggle("colorFont");
};
const changeBackground = () => {
  document.body.classList.toggle("whiteTheame");
};

const removePhoto = () => {
  photo.remove();
};
btnFont.addEventListener("click", changeColorFont);
btnBackground.addEventListener("click", changeBackground);
btnPhoto.addEventListener("click", removePhoto);
