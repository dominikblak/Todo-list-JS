console.log("Witaj Neo w Matriksie !");
const btnFont = document.querySelector(".js-btnFont");
const btnBackground = document.querySelector(".js-btnBackground");
const btnPhoto = document.querySelector(".js-btnRemovePhoto");
const about = document.querySelector(".introduction");
const photo = document.querySelector(".introduction__photo");

const changeColorFont = () => {
  document.body.classList.toggle("colorFont");
};
const changeBackground = () => {
  document.body.classList.toggle("whiteTheame");
};

const addPhoto = () => {
  if (photo.style.display === "none") {
    photo.style.display = "block";
    btnPhoto.innerHTML = "Ukryj logo";
  } else {
    photo.style.display = "none";
    btnPhoto.innerHTML = "Pokaż logo";
  }
};
btnFont.addEventListener("click", changeColorFont);
btnBackground.addEventListener("click", changeBackground);
btnPhoto.addEventListener("click", addPhoto);
