import { css } from 'lit-element';
export const progressbarStyles = css `
  :host .simple-progressbar {
    background-color: #ffffff;
    box-shadow: 0px 1px 3px #00000020;
    border-radius: 0.25rem;
    position: relative;
    height: 100%;
    min-height: 1em;
    overflow: hidden;
    width: 100%;
  }

  :host .simple-progressbar-active .simple-progressbar-display {
    background-color: #0078d4;
    position: absolute;
    height: 100%;
    transition: width 0.3s ease-in-out;
  }
`;
//# sourceMappingURL=progressbar-styles.js.map