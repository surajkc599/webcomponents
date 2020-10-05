import { css } from 'lit-element';

export const iconStyles = css`
  :host {
    display: flex;
    justify-content: center;
    pointer-events: none;
    color: currentColor;
  }

  :host(.left) {
      margin-right: 12px;
  }

  :host(.right) {
      margin-left: 12px;
  }
`;
