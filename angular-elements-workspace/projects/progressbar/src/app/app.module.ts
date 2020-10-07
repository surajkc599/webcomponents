import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressbarComponent } from './component/progressbar/progressbar.component';

@NgModule({
  declarations: [ProgressbarComponent],
  imports: [BrowserModule],
  entryComponents: [ProgressbarComponent],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const progressbarComponent = createCustomElement(ProgressbarComponent, {
      injector: this.injector,
    });
    customElements.define('simple-progressbar', progressbarComponent);
  }
}
