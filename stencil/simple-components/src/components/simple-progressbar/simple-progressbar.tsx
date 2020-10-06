import { Component, Host, h, Prop, EventEmitter, Event, Watch } from '@stencil/core';

@Component({
  tag: 'simple-progressbar',
  styleUrl: 'simple-progressbar.scss',
  shadow: true,
})
export class SimpleProgressbar {
  /**
   * The value for progress indicator
   */
  @Prop() public value: number;

  /**
   * watcher that performs side effect based on progress update
   * @param newValue - Progress value
   */
  @Watch('value')
  watchHandler(newValue: number) {
    this.statusUpdate.emit(newValue);
  }

  /**
   * Initialize the properties to default values.
   */
  constructor() {
    this.value = 0;
  }

  /**
   * An event that is passed to parent component by emitting updated value
   */
  @Event() statusUpdate!: EventEmitter;

  /**
   * Re-renders the template when property value is changed asynchronously.
   */
  render() {
    return (
      <Host class="simple-progressbar">
        <div class="simple-progressbar-container">
          <div
            class="simple-progressbar-active"
            style={{
              width: `${this.value}%`,
            }}
          ></div>
        </div>
      </Host>
    );
  }
}
