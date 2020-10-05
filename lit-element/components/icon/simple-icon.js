var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement, property } from 'lit-element';
import { iconStyles } from './simple-icon-styles';
const MENU_ICON = html `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <line x1="21" y1="10" x2="3" y2="10"></line>
  <line x1="21" y1="6" x2="3" y2="6"></line>
  <line x1="21" y1="14" x2="3" y2="14"></line>
  <line x1="21" y1="18" x2="3" y2="18"></line>
</svg>`;
const SEARCH_ICON = html `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
  data-reactid="1051"
>
  <circle cx="11" cy="11" r="8"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>`;
let SimpleIconElement = class SimpleIconElement extends LitElement {
    constructor() {
        super();
    }
    render() {
        return name === 'search' ? SEARCH_ICON : MENU_ICON;
    }
};
SimpleIconElement.styles = iconStyles;
__decorate([
    property()
], SimpleIconElement.prototype, "name", void 0);
SimpleIconElement = __decorate([
    customElement('simple-icon')
], SimpleIconElement);
export { SimpleIconElement };
//# sourceMappingURL=simple-icon.js.map