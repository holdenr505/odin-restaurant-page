function createHTMLElement(type, attributes, ...children) {
  const element = document.createElement(type);

  if (attributes && typeof attributes === "object") {
    const attributeNames = Object.keys(attributes);

    attributeNames.forEach((name) => {
      element.setAttribute(name, attributes[name]);
    });
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

export default createHTMLElement;
