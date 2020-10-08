/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { Components } from '@simplecomponents';
import { SimpleProgressbar as ISimpleProgressbar } from '@simplecomponents/types/components/simple-progressbar/simple-progressbar';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';



export declare interface MyComponent extends Components.MyComponent {}
@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SimpleProgressbar extends Components.SimpleProgressbar {}
@ProxyCmp({
  inputs: ['value']
})
@Component({
  selector: 'simple-progressbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['value'],
  outputs: ['statusUpdate']
})
export class SimpleProgressbar {
  /** An event that is passed to parent component by emitting updated value */
  statusUpdate!: ISimpleProgressbar['statusUpdate'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['statusUpdate']);
  }
}
