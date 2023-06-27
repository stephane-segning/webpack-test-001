import rawHtml from "./template.module.html";

class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = rawHtml;
  }

  connectedCallback() {
  }
}

customElements.define("app-footer", AppFooter);
