import { customElement, html, LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { buttonStyles } from './simple-button-styles';

/**
 * A Button Component.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('simple-button')
export class SimpleButtonElement extends LitElement {
  // Import styles for button
  static styles = buttonStyles;

  /**
   * The type of button for visualization.
   */
  @property()
  type: 'primary' | 'secondary' = 'primary';

  /**
   * The class applied based on the type of button.
   */
  @property()
  classes: Object;

  constructor() {
    super();
    // Default values
    this.classes = {
      'simple-button': true,
      'simple-primary': this.type === 'primary',
      'simple-secondary': this.type === 'secondary',
    };
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    super.attributeChangedCallback(name, oldVal, newVal);

    // Update values when property is changed!
    if (name === 'type') {
      this.classes = {
        ...this.classes,
        'simple-primary': newVal === 'primary',
        'simple-secondary': newVal === 'secondary',
      };
    }
  }

  render() {
    return html`
      <button class=${classMap(this.classes as any)}><slot></slot></button>
    `;
  }
}

