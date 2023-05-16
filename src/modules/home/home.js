import createHTMLElement from "../helpers/helpers";
import lunch from "./lunch.jpg";
import dinner from "./dinner.jpg";
import beverages from "./beverages.jpg";
import "./home.css";

function createHome() {
  const main = document.querySelector("main");

  const hero = createHTMLElement(
    "section",
    { id: "hero" },
    createHTMLElement(
      "h1",
      "",
      "We serve the best Japanese cuisine in the world"
    ),
    createHTMLElement(
      "p",
      "",
      "That's right. Nobody's better than us cause we're the best." +
        " We may not have any reviews, or even be a real restaurant," +
        " but we're in fact the best cause we said so and you better believe it"
    ),
    createHTMLElement("button", "", "View Menu")
  );

  // const about = createHTMLElement();

  const lunchOffer = createHTMLElement(
    "div",
    { class: "offer" },
    createHTMLElement("img", { src: lunch, alt: "lunch" }),
    createHTMLElement(
      "div",
      { class: "offer-text " },
      createHTMLElement("h2", "", "Lunch"),
      createHTMLElement("p", "", "We got some good lunch.")
    )
  );
  const dinnerOffer = createHTMLElement(
    "div",
    { class: "offer" },
    createHTMLElement("img", { src: dinner, alt: "dinner" }),
    createHTMLElement(
      "div",
      { class: "offer-text " },
      createHTMLElement("h2", "", "Dinner"),
      createHTMLElement("p", "", "We got some good dinner.")
    )
  );
  const beverageOffer = createHTMLElement(
    "div",
    { class: "offer" },
    createHTMLElement("img", { src: beverages, alt: "sake" }),
    createHTMLElement(
      "div",
      { class: "offer-text " },
      createHTMLElement("h2", "", "Beverages"),
      createHTMLElement("p", "", "We got some good beverages.")
    )
  );

  main.append(hero, lunchOffer, dinnerOffer, beverageOffer);
}

export default createHome;
