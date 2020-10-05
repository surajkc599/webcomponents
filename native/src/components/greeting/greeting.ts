class Greeting extends HTMLElement {
  // Definition for attributes supported on our custom element
  static get observedAttributes() {
    return ["type", "size"];
  }

  get type() {
    return this.getAttribute("type") || this.type;
  }
  set type(value: string) {
    this.setAttribute("type", value);
  }

  get size() {
    return this.getAttribute("size") || this.size;
  }
  set size(value: string) {
    this.setAttribute("size", value);
  }

  // Initialization of Class
  constructor() {
    super();
    // Default secondary button
    if (!this.type) {
      this.type = "secondary";
    }
    // Default size button
    if (!this.size) {
      this.size = "large";
    }
  }

  // Triggered when native element added to the DOM
  connectedCallback() {
    // Add the remaining template after native element is added!
    this.render();
  }

  // Triggered when change of attribute
  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    if (oldVal !== newVal) {
      console.log(`${name} changed from ${oldVal} to ${newVal}`);
    }
  }

  // custom method to add the final template
  render() {
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        :host {
          color: #2b3e4b;
          font-size: 20px;
          border: 1px solid #d4d6d7;
          padding: 12px;
          background-color: #f2f1f1;
        }
        :host-context(.dark) {
          color: #ffffff;
          background-color: #000000;
        }
      </style>
      <span class="greeting">You are setting type of ${this.type}</span>
    `;
    
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // Triggered when removed from the DOM
  disconnectedCallback() {
    console.log("DisConnected!");
  }
}

window.customElements.define("simple-greeting", Greeting);
