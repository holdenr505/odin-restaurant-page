import createHTMLElement from "../helpers/helpers";
import "./header.css";
import logo from "./logo.png";
import hamburgerIcon from "./icon-menu.svg";

function createHeader() {
  const content = document.querySelector("#content");

  const homeLink = createHTMLElement(
    "li",
    "",
    createHTMLElement("a", { href: "#" }, "Home")
  );

  const menuLink = createHTMLElement(
    "li",
    "",
    createHTMLElement("a", { href: "#" }, "Menu")
  );

  const contactLink = createHTMLElement(
    "li",
    "",
    createHTMLElement("a", { href: "#" }, "Contact Us")
  );

  const header = createHTMLElement(
    "header",
    "",
    createHTMLElement(
      "a",
      { id: "logo", href: "#" },
      createHTMLElement("img", { src: logo }),
      createHTMLElement("div", "", "Sushi Express")
    ),
    createHTMLElement("img", {
      src: hamburgerIcon,
      alt: "open navigation",
      id: "open-button",
    }),
    createHTMLElement(
      "nav",
      "",
      createHTMLElement(
        "ul",
        { id: "nav-list" },
        homeLink,
        menuLink,
        contactLink
      )
    )
  );

  content.appendChild(header);
}

export default createHeader;
