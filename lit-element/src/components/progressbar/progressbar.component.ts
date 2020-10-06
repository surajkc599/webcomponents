import { customElement, html, LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
import { progressbarStyles } from './progressbar-styles';

@customElement('simple-progressbar')
export class ProgressbarElement extends LitElement {
  // Import styles for Progressbar
  static styles = progressbarStyles;

  @property({
    type: Number,
    attribute: true,
    reflect: true,
    hasChanged: (newVal, oldVal) => {
      return newVal !== oldVal;
    },
  })
  value;

  classes: Object;
  styles: Object;

  constructor() {
    super();

    // Default values
    this.value = 0;
    this.classes = {
      'simple-progressbar': true,
      'simple-progressbar-active': this.value > 0 ? true : false,
    };
    this.styles = {width: `${this.value}%`};
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    super.attributeChangedCallback(name, oldVal, newVal);

    // Update values when property is changed!
    if (name === 'value') {
      this.styles = {width: `${this.value}%`};
      this.classes = {
        ...this.classes,
        'simple-progressbar-active': this.value > 0 ? true : false,
      };
      let event = new CustomEvent('progressupdate-event', {
        detail: {
          message: this.value
        }
      });
      this.dispatchEvent(event);
    }
  }

  render() {
    return html`
      <div class=${classMap(this.classes as any)}>
        <div
          class="simple-progressbar-display"
          style=${styleMap(this.styles as any)}
        ></div>
      </div>
    `;
  }
}
