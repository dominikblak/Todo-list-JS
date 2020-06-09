console.log("Witaj Neo w Matriksie !");
const block = document.body;
block.classList.add("mySite");
const btnFont = document.querySelector(".font");
const btnBackground = document.querySelector(".background");
const btnPhoto = document.querySelector(".removePhoto");
const about = document.querySelector(".aboutMe");
const photo = document.querySelector(".photo");
const img = new Image();
img.src = "img/wifibooth_3264-IMG_2806kolor.jpg";

const changeColorFont = () => {
  about.classList.toggle("colorFont");
};
const changeBackground = () => {
  document.body.classList.toggle("whiteTheame");
};

const addPhoto = () => {
  photo.append(img);
  btnPhoto.innerHTML = "Usuń zdjęcie";
  btnPhoto.addEventListener("click", () => {
    photo.removeChild(img);
    btnPhoto.innerHTML = "Pokaż zdjęcie";
  });
};
btnFont.addEventListener("click", changeColorFont);
btnBackground.addEventListener("click", changeBackground);
btnPhoto.addEventListener("click", addPhoto);
