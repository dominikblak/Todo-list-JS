console.log(
  "%cWitaj Neo w Matriksie ! :-)",
  "color: rgb(56, 168, 50); font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;"
);
const btnProjects = document.getElementById("projects");
const btnBackground = document.getElementById("background");
const btnContact = document.getElementById("contact");

let show = document.getElementsByClassName("showProjects");
let flag = false;
let flagContact = false;
const showProjects = () => {
  show.innerHTML = "";
  flag = !flag;
  if (flag == true) {
    const git = document.createElement("div");

    git.innerHTML =
      "<h1>https://github.com/dominikblak</h1> <p>Skopiować i wkleić link. Serwisy blokują przekierowania z sandboxów (?)</p><a href='https://github.com/dominikblak'><img src='img/github-153-675523.png' alt='Konto GitHub' /></a>";
    show = document.body.appendChild(git);
    flag = !flag;
  }
};
const changeBackground = () => {
  document.body.classList.toggle("whiteTheame");
};

const showContact = () => {
  show.innerHTML = "";
  flagContact = !flagContact;
  if (flagContact == true) {
    const contact = document.createElement("div");
    contact.innerHTML =
      "<h1>https://www.linkedin.com/in/dominik-blak-060416176/</h1> <p>Skopiować i wkleić link. Serwisy blokują przekierowania z sandboxów (?)</p><a href='https://www.linkedin.com/in/dominik-blak-060416176/'><img src='img/official-linkedin-logo-tile-300x300.png' alt='Konto GitHub' /></a>";
    show = document.body.appendChild(contact);
    flagContact = !flagContact;
  }
};
btnProjects.addEventListener("click", showProjects);
btnBackground.addEventListener("click", changeBackground);
btnContact.addEventListener("click", showContact);
