import createHeader from "./modules/header/header";
import createFooter from "./modules/footer/footer";
import createHome from "./modules/home/home";
import createContact from "./modules/contact/contact";
import createMenu from "./modules/menu/menu";
import closeHamburgerIcon from "./modules/header/icon-menu-close.svg";
import hamburgerIcon from "./modules/header/icon-menu.svg";
import "./global-styles.css";

function addEvents() {
  const main = document.querySelector("main");
  const links = document.querySelectorAll("#nav-list>li>a");
  const hamburger = document.querySelector("#open-button");
  const nav = document.querySelector("nav");

  links[0].addEventListener("click", () => {
    main.innerHTML = "";
    createHome();
  });

  links[1].addEventListener("click", () => {
    main.innerHTML = "";
    createMenu();
  });

  links[2].addEventListener("click", () => {
    main.innerHTML = "";
    createContact();
  });

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("menu-active");

    if (nav.classList.contains("menu-active")) {
      hamburger.src = closeHamburgerIcon;
    } else {
      hamburger.src = hamburgerIcon;
    }
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
