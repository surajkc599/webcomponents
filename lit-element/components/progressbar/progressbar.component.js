var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
import { progressbarStyles } from './progressbar-styles';
let ProgressbarElement = class ProgressbarElement extends LitElement {
    constructor() {
        super();
        // Default values
        this.value = 0;
        this.classes = {
            'simple-progressbar': true,
            'simple-progressbar-active': this.value > 0 ? true : false,
        };
        this.styles = { width: `${this.value}%` };
    }
    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        // Update values when property is changed!
        if (name === 'value') {
            this.styles = { width: `${this.value}%` };
            this.classes = Object.assign(Object.assign({}, this.classes), { 'simple-progressbar-active': this.value > 0 ? true : false });
            let event = new CustomEvent('progressupdate-event', {
                detail: {
                    message: this.value
                }
            });
            this.dispatchEvent(event);
        }
    }
    render() {
        return html `
      <div class=${classMap(this.classes)}>
        <div
          class="simple-progressbar-display"
          style=${styleMap(this.styles)}
        ></div>
      </div>
    `;
    }
};
// Import styles for Progressbar
ProgressbarElement.styles = progressbarStyles;
__decorate([
    property({
        type: Number,
        attribute: true,
        reflect: true,
        hasChanged: (newVal, oldVal) => {
            return newVal !== oldVal;
        },
    })
], ProgressbarElement.prototype, "value", void 0);
ProgressbarElement = __decorate([
    customElement('simple-progressbar')
], ProgressbarElement);
export { ProgressbarElement };
//# sourceMappingURL=progressbar.component.js.map