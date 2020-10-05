import { LitElement } from 'lit-element';
/**
 * A Button Component.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class SimpleButtonElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * The type of button for visualization.
     */
    type: 'primary' | 'secondary';
    /**
     * The class applied based on the type of button.
     */
    classes: Object;
    constructor();
    attributeChangedCallback(name: string, oldVal: string, newVal: string): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'simple-button': SimpleButtonElement;
    }
}
//# sourceMappingURL=simple-button.d.ts.map