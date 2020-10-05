import { LitElement } from 'lit-element';
export declare class ProgressbarElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    value: number;
    classes: Object;
    styles: Object;
    constructor();
    attributeChangedCallback(name: string, oldVal: string, newVal: string): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'simple-progressbar': ProgressbarElement;
    }
}
//# sourceMappingURL=progressbar.component.d.ts.map