var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { buttonStyles } from './simple-button-styles';
/**
 * A Button Component.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let SimpleButtonElement = class SimpleButtonElement extends LitElement {
    constructor() {
        super();
        /**
         * The type of button for visualization.
         */
        this.type = 'primary';
        // Default values
        this.classes = {
            'simple-button': true,
            'simple-primary': this.type === 'primary',
            'simple-secondary': this.type === 'secondary',
        };
    }
    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        // Update values when property is changed!
        if (name === 'type') {
            this.classes = Object.assign(Object.assign({}, this.classes), { 'simple-primary': newVal === 'primary', 'simple-secondary': newVal === 'secondary' });
        }
    }
    render() {
        return html `
      <button class=${classMap(this.classes)}><slot></slot></button>
    `;
    }
};
// Import styles for button
SimpleButtonElement.styles = buttonStyles;
__decorate([
    property()
], SimpleButtonElement.prototype, "type", void 0);
__decorate([
    property()
], SimpleButtonElement.prototype, "classes", void 0);
SimpleButtonElement = __decorate([
    customElement('simple-button')
], SimpleButtonElement);
export { SimpleButtonElement };
//# sourceMappingURL=simple-button.js.map