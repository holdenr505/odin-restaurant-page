import createHTMLElement from "./helpers";

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
    createHTMLElement("a", { id: "logo" }),
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
