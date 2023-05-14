import createHTMLElement from "./helpers";

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
    createHTMLElement("h2", "", "Business Hours"),
    hoursList
  );

  const contactContainer = createHTMLElement(
    "div",
    { class: "footer-div" },
    createHTMLElement("h2", "", "Contact Us"),
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
    createHTMLElement("img")
  );

  const facebookLink = createHTMLElement(
    "a",
    { href: "#" },
    createHTMLElement("img")
  );

  const instagramLink = createHTMLElement(
    "a",
    { href: "#" },
    createHTMLElement("img")
  );

  const socialsContainer = createHTMLElement(
    "div",
    {
      class: "footer-div",
    },
    createHTMLElement("h2", "", "Social Media"),
    createHTMLElement(
      "ul",
      "",
      createHTMLElement("li", "", twitterLink),
      createHTMLElement("li", "", facebookLink),
      createHTMLElement("li", "", instagramLink)
    )
  );

  const footer = createHTMLElement(
    "footer",
    "",
    hoursContainer,
    contactContainer,
    socialsContainer
  );

  content.appendChild(footer);
}

export default createFooter;
