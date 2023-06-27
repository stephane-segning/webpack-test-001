import rawHtml from "./template.module.html";

class AppPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = rawHtml;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const { shadowRoot, attributes, classList } = this;
    if (!shadowRoot) return;

    const panel = shadowRoot.querySelector(".panel");
    if (!panel) return;

    panel.innerHTML = this.innerHTML;

    const allClasses = (attributes.getNamedItem("my-class")?.value ?? "")
      .split(" ")
      .concat(classList.value.split(" "))
      .filter((className) => !!className);

    allClasses.forEach((className) => {
      panel.classList.add(className);
    });
  }
}

customElements.define("app-panel", AppPanel);
