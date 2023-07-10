import createHTMLElement from "../helpers/helpers";
import createMenu from "../menu/menu";
import lunchMobile from "./lunch-800px.jpg";
import lunchTablet from "./lunch-1400px.jpg";
import lunchDesktop from "./lunch-2000px.jpg";
import dinnerMobile from "./dinner-800px.jpg";
import dinnerTablet from "./dinner-1400px.jpg";
import dinnerDesktop from "./dinner-2000px.jpg";
import beverageMobile from "./beverages-800px.jpg";
import beverageTablet from "./beverages-1400px.jpg";
import beverageDesktop from "./beverages-2000px.jpg";
import "./home.css";

function createHome() {
  const main = document.querySelector("main");

  const heroButton = createHTMLElement(
    "button",
    { id: "hero-button" },
    "View Menu"
  );
  heroButton.addEventListener("click", () => {
    main.innerHTML = "";
    createMenu();
  });

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
    heroButton
  );

  // const about = createHTMLElement();

  const lunchOffer = createHTMLElement(
    "div",
    { class: "offer" },
    createHTMLElement("img", {
      src: lunchDesktop,
      srcset: `${lunchMobile} 800w, ${lunchTablet} 1400w, ${lunchDesktop} 2000w`,
      sizes: "(max-width: 800px) 40vw, (max-width: 1400px) 40vw, 40vw",
      alt: "lunch",
    }),
    createHTMLElement(
      "div",
      { class: "offer-text " },
      createHTMLElement("h2", "", "Lunch"),
      createHTMLElement(
        "p",
        "",
        "This is definitely a picture of our food and not a stock photo. Doesn't it look delicious?"
      )
    )
  );
  const dinnerOffer = createHTMLElement(
    "div",
    { class: "offer" },
    createHTMLElement("img", {
      src: dinnerDesktop,
      srcset: `${dinnerMobile} 800w, ${dinnerTablet} 1400w, ${dinnerDesktop} 2000w`,
      sizes: "(max-width: 800px) 40vw, (max-width: 1400px) 40vw, 40vw",
      alt: "dinner",
    }),
    createHTMLElement(
      "div",
      { class: "offer-text " },
      createHTMLElement("h2", "", "Dinner"),
      createHTMLElement(
        "p",
        "",
        "Who doesn't love chicken? Please give us business and we'll give you some chicken!"
      )
    )
  );
  const beverageOffer = createHTMLElement(
    "div",
    { class: "offer" },
    createHTMLElement("img", {
      src: beverageDesktop,
      srcset: `${beverageMobile} 800w, ${beverageTablet} 1400w, ${beverageDesktop} 2000w`,
      sizes: "(max-width: 800px) 40vw, (max-width: 1400px) 40vw, 40vw",
      alt: "sake",
    }),
    createHTMLElement(
      "div",
      { class: "offer-text " },
      createHTMLElement("h2", "", "Beverages"),
      createHTMLElement(
        "p",
        "",
        "Drink our sake to numb the pain and avoid your problems. I do it every day."
      )
    )
  );

  main.append(hero, lunchOffer, dinnerOffer, beverageOffer);
}

export default createHome;
