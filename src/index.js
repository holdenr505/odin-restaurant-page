import createHeader from "./modules/header/header";
import createFooter from "./modules/footer/footer";
import createHome from "./modules/home/home";
import "./global-styles.css";

function addEvents() {
  const main = document.querySelector("main");
  const links = document.querySelectorAll("#nav-list > li");

  links[0].addEventListener("click", () => {
    main.innerHTML = "";
    createHome();
  });

  links[1].addEventListener("click", () => {
    main.innerHTML = "";
  });

  links[2].addEventListener("click", () => {
    main.innerHTML = "";
  });
}

function loadPage() {
  const content = document.querySelector("#content");

  createHeader();
  content.append(document.createElement("main"));
  createFooter();
  createHome();

  addEvents();
}

loadPage();
