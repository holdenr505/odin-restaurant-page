import createHTMLElement from "../helpers/helpers";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import "./footer.css";

function createFooter() {
  const content = document.querySelector("#content");

  const hoursList = createHTMLElement("ul");

  const businessHours = [
    "Sat 9:00 AM - 11:00 PM",
    "Sun 10:00 AM - 11:00 PM",
    "Mon 10:00 AM - 11:00 PM",
    "Tue 10:00 AM - 11:00 PM",
    "Wed 10:00 AM - 11:00 PM",
    "Thu 10:00 AM - 11:00 PM",
    "Fri 10:00 AM - 11:00 PM",
  ];

  businessHours.forEach((hours) => {
    hoursList.appendChild(createHTMLElement("li", "", hours));
  });

  const hoursContainer = createHTMLElement(
    "div",
    { class: "footer-div" },
    createHTMLElement("h3", "", "Business Hours"),
    hoursList
  );

  const contactContainer = createHTMLElement(
    "div",
    { class: "footer-div" },
    createHTMLElement("h3", "", "Contact Us"),
    createHTMLElement(
      "ul",
      "",
      createHTMLElement("li", "", "123 Real St"),
      createHTMLElement("li", "", "(123) 456-789")
    )
  );

  const twitterLink = createHTMLElement(
    "a",
    { href: "#" },
    createHTMLElement("img", { src: twitter, alt: "twitter" })
  );

  const facebookLink = createHTMLElement(
    "a",
    { href: "#" },
    createHTMLElement("img", { src: facebook, alt: facebook })
  );

  const instagramLink = createHTMLElement(
    "a",
    { href: "#" },
    createHTMLElement("img", { src: instagram, alt: "instagram" })
  );

  const socialsContainer = createHTMLElement(
    "div",
    {
      class: "footer-div",
    },
    createHTMLElement("h3", "", "Social Media"),
    createHTMLElement(
      "ul",
      "",
      createHTMLElement("li", "", twitterLink),
      createHTMLElement("li", "", facebookLink),
      createHTMLElement("li", "", instagramLink)
    )
  );

  const container = createHTMLElement(
    "div",
    "",
    hoursContainer,
    contactContainer,
    socialsContainer
  );

  const footer = createHTMLElement("footer", "", container);

  content.appendChild(footer);
}

export default createFooter;
