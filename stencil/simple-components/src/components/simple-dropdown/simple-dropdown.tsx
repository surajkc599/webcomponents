import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'simple-dropdown',
  styleUrl: 'simple-dropdown.css',
  shadow: true,
})
export class SimpleDropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
