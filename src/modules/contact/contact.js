import createHTMLElement from "../helpers/helpers";
import "./contact.css";

function createContact() {
  const main = document.querySelector("main");

  const heading = createHTMLElement("h2", "", "Contact Our Staff");

  const fnameLabel = createHTMLElement(
    "label",
    { for: "fname" },
    "First Name: "
  );
  const fnameInput = createHTMLElement("input", { type: "text", id: "fname" });
  const fnameDiv = createHTMLElement(
    "div",
    { class: "form-div" },
    fnameLabel,
    fnameInput
  );

  const lnameLabel = createHTMLElement(
    "label",
    { for: "lname" },
    "Last Name: "
  );
  const lnameInput = createHTMLElement("input", { type: "text", id: "lname" });
  const lnameDiv = createHTMLElement(
    "div",
    { class: "form-div" },
    lnameLabel,
    lnameInput
  );

  const emailLabel = createHTMLElement("label", { for: "email" }, "Email: ");
  const emailInput = createHTMLElement("input", { type: "email", id: "email" });
  const emailDiv = createHTMLElement(
    "div",
    { class: "form-div" },
    emailLabel,
    emailInput
  );

  const messageLabel = createHTMLElement(
    "label",
    { for: "message" },
    "Message: "
  );
  const messageInput = createHTMLElement("textarea", {
    id: "message",
    rows: 10,
    cols: 30,
  });
  const messageDiv = createHTMLElement(
    "div",
    { class: "form-div" },
    messageLabel,
    messageInput
  );

  const formButton = createHTMLElement("button", "", "Submit");

  const form = createHTMLElement("form");

  form.append(fnameDiv, lnameDiv, emailDiv, messageDiv, formButton);

  const contactSection = createHTMLElement(
    "section",
    {
      id: "contact-section",
    },
    heading,
    form
  );

  main.append(contactSection);
}

export default createContact;
