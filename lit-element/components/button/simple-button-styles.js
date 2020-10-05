import { css } from 'lit-element';
export const buttonStyles = css `
    :host {
      height: 48px;
    }

    :host .simple-button:hover {
      cursor: pointer;
    }
    
    :host .simple-button {
      font-size: 1.25rem;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 26px;

      display: inline-flex;
      
      align-items: center;
      justify-content: center;
      
      box-sizing: border-box;
      outline: none;
      border: none;
      
      width: auto;
      height: inherit;
      padding: 1rem;
      position: relative;
      overflow: hidden;
      border-radius: 2px;
      box-shadow: 0px 1px 3px #00000020;
      border: 0.0625rem solid transparent;
    }
   
    :host .simple-button.simple-primary {
      background-color: #0078d4;
      color: #ffffff;
    }
    :host .simple-button.simple-primary:hover {
      box-shadow: 0px 3px 9px #00000020;
      background-color: #106ebe;
    }
    :host .simple-button.simple-primary:focus {
      border: 0.0625rem solid #2b3e4b;
      box-shadow: 0px 1px 3px #00000020;
      background-color: #0078d4;
    }

    :host .simple-button.simple-secondary {
      background-color: #ffffff;
      color: #2b3e4b;
    }
    :host .simple-button.simple-secondary:hover {
      box-shadow: 0px 3px 9px #00000020;
      background-color: #e5f4ff;
    }
    :host .simple-button.simple-secondary:focus {
      border: 0.0625rem solid #2b3e4b;
      box-shadow: 0px 1px 3px #00000020;
      background-color: #ffffff;
    }
  }`;
//# sourceMappingURL=simple-button-styles.js.map