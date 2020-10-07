import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProgressbarComponent {
  @Input() public value: number;
}
