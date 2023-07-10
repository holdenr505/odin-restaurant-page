import createHTMLElement from "../helpers/helpers";
import lunch from "./lunch.png";
import dinner from "./dinner.png";
import beverages from "./beverages.png";
import "./menu.css";

function createMenuItem(name, description, price) {
  const itemName = createHTMLElement("h4", "", name);
  const itemDescription = createHTMLElement("p", "", description);
  const itemPrice = createHTMLElement("div", "", price);
  const itemContainer = createHTMLElement(
    "div",
    { class: "item-container" },
    itemName,
    itemDescription,
    itemPrice
  );

  return itemContainer;
}

function createMenu() {
  const main = document.querySelector("main");

  const lunchImg = createHTMLElement("img", { src: lunch, alt: "lunch icon" });
  const lunchHeading = createHTMLElement("h2", "", "Lunch");
  const lunchHeadingContainer = createHTMLElement(
    "div",
    { class: "menu-heading" },
    lunchImg,
    lunchHeading
  );
  const firstLunchItem = createMenuItem(
    "California Roll",
    "Indulge in the savory delight of our California Roll. Inside the delicate nori seaweed wrap, you'll find a harmonious blend of creamy avocado, crisp cucumber, and succulent imitation crab meat.",
    "$3.99"
  );
  const secondLunchItem = createMenuItem(
    "Sake Nigiri",
    "Experience the delicate flavors of our Sake Nigiri, a true indulgence for sushi lovers. Each piece showcases the finest cuts of fresh, raw salmon expertly placed atop a bed of perfectly seasoned sushi rice.",
    "$3.99"
  );
  const thirdLunchItem = createMenuItem(
    "Miso Soup",
    "Made with a traditional blend of fermented soybean paste, delicate seaweed, and flavorful tofu, this savory broth is the perfect start to any meal.",
    "$3.99"
  );
  const lunchContainer = createHTMLElement(
    "div",
    { class: "menu-container" },
    lunchHeadingContainer,
    firstLunchItem,
    secondLunchItem,
    thirdLunchItem
  );

  const dinnerImg = createHTMLElement("img", {
    src: dinner,
    alt: "dinner icon",
  });
  const dinnerHeading = createHTMLElement("h2", "", "Dinner");
  const dinnerHeadingContainer = createHTMLElement(
    "div",
    { class: "menu-heading" },
    dinnerImg,
    dinnerHeading
  );
  const firstDinnerItem = createMenuItem(
    "Teriyaki Chicken",
    "Tender chicken breasts are marinated to perfection, grilled to juicy perfection, and served with our signature sweet and savory teriyaki sauce.",
    "$3.99"
  );
  const secondDinnerItem = createMenuItem(
    "Chicken Katsu",
    "Crispy and tender breaded chicken cutlet served with a tangy katsu sauce. The perfect combination of crunchy and savory flavors that will leave you craving for more.",
    "$3.99"
  );
  const thirdDinnerItem = createMenuItem(
    "Yakisoba",
    "Stir-fried noodles with a medley of fresh vegetables, tender slices of meat, and a hint of savory sauce. A delightful balance of textures and flavors that will satisfy your cravings for a hearty and flavorful dish.",
    "$3.99"
  );
  const dinnerContainer = createHTMLElement(
    "div",
    { class: "menu-container" },
    dinnerHeadingContainer,
    firstDinnerItem,
    secondDinnerItem,
    thirdDinnerItem
  );

  const beverageImg = createHTMLElement("img", {
    src: beverages,
    alt: "beverage icon",
  });
  const beverageHeading = createHTMLElement("h2", "", "Beverages");
  const beverageHeadingContainer = createHTMLElement(
    "div",
    { class: "menu-heading" },
    beverageImg,
    beverageHeading
  );
  const firstBeverageItem = createMenuItem(
    "Sake",
    "Discover the elegance of traditional Japanese rice wine with our exquisite Sake selection. Crafted with utmost care and precision, our Sake offers a range of flavors from light and floral to rich and full-bodied.",
    "$3.99"
  );
  const secondBeverageItem = createMenuItem(
    "Plum Wine",
    "Indulge in the sweet and aromatic flavors of our Plum Wine. Made from fermented plums, this Japanese wine offers a delightful balance of tartness and sweetness.",
    "$3.99"
  );
  const thirdBeverageItem = createMenuItem(
    "Chūhai",
    "Experience the refreshing taste of our Chuhai cocktail. This popular Japanese drink combines shochu, a distilled spirit, with a variety of fruity flavors like lemon, grapefruit, or peach.",
    "$3.99"
  );
  const beverageContainer = createHTMLElement(
    "div",
    { class: "menu-container" },
    beverageHeadingContainer,
    firstBeverageItem,
    secondBeverageItem,
    thirdBeverageItem
  );

  main.append(lunchContainer, dinnerContainer, beverageContainer);
}

export default createMenu;
