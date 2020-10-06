import { customElement, html, LitElement, property } from 'lit-element';
import { iconStyles } from './simple-icon-styles';

const MENU_ICON = html`<svg
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

const SEARCH_ICON = html`<svg
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


@customElement('simple-icon')
export class SimpleIconElement extends LitElement {
  static styles = iconStyles;

  @property()
  name!: string;

  constructor() {
    super();
  }

  render() {
    return name === 'search' ? SEARCH_ICON : MENU_ICON;
  }
}
